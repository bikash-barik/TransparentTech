import Head from 'next/head'
import Header from '../src/components/components/Header'
import HeaderMain from '../src/components/Header'
import Collection from './collections/[collectionId]'
import Hero from '../src/components/components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect,useState } from 'react'
import { client } from '../src/components/lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#0b1426] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#e4eaf2] font-semibold mt-4`,
}

export default function marketplace() {
  const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome To Marketplace${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
          {/* <Collection/> */}
        </>
      ) : (
        <>
          <HeaderMain mobileMenu={{ MobileMenuIsOpen, setMobileMenuIsOpen }} />

        <div className={style.walletConnectWrapper}>
          
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          <div className={style.details} style={{color:"#fff"}}>
            You need Chrome to be
            <br /> Able to run this app.
            <br /> Download Metamask or any Wallet.
          </div>
        </div>
        </>
      )}
    </div>
  )
}

// import Home from "../src/components/Home";

// export default function Index() {
//   return <Home />;
// }




import Home from "../src/components/Home";
import styled from "styled-components";
import { Colors } from "../src/components/Theme";
import { useState } from "react";
import Header from "../src/components/Header";
import Button from "../src/components/styled/Button.styled";
import Page from "../src/components/styled/Page.styled";


const MobileMenu = styled.div`
  background-color: ${Colors.Background};
  color: ${Colors.White};
  z-index: ${(p) => (p.open ? "9" : "-1")};
  position: absolute;
  padding: 2rem 1rem 1rem 1.2rem;
  left: 0;
  display: flex;
  width: ${(p) => (p.open ? "100%" : "0")};
  height: 100%;

  ul {
    opacity: ${(p) => (p.open ? "1" : "0")};
    transition: all 0.1s ease-out;
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`;

const NavItem = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
`;




 export default function Index() {
  const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <>
   
        <Header mobileMenu={{ MobileMenuIsOpen, setMobileMenuIsOpen }} />
        <Page>
          <MobileMenu open={MobileMenuIsOpen}>
            <ul>
              <li>
                <NavItem href="#">Marketplace</NavItem>
              </li>
              <li>
                <NavItem href="#">Drops</NavItem>
              </li>
              <li>
                <NavItem href="#">Brands</NavItem>
              </li>
              <li>
                <Button>Create</Button>
              </li>
              <hr color={Colors.Primary} size="1" />
              <li>
                <NavItem href="#">Sign In</NavItem>
              </li>
              <li>
                <NavItem href="#">Sign Up</NavItem>
              </li>
            </ul>
          </MobileMenu>
        <Home />

        </Page>
    </>
  );
}





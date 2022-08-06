import styled from "styled-components";
import Button from "../styled/Button.styled";
import { Colors, Devices } from "../Theme";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

const CarouselEl = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  margin-top: 3rem;
  gap: 1rem;

  @media ${Devices.Tablet} {
    padding: 1rem 3rem;
  }

  @media ${Devices.Laptop} {
    padding: 1rem 5%;
  }

  @media ${Devices.LaptopL} {
    padding: 1rem 10%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`;
const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;
`;
const CtrlBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(p) => (p.active ? "pointer" : "")};
  width: 3rem;
  height: 3rem;
  color: ${(p) => (p.active ? Colors.Primary : Colors.PrimaryDisable)};
  font-size: 1.5rem;
  background-color: ${Colors.PrimaryDark};
  border-radius: 50%;
`;

const ItemContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  width: 100%;
  display: flex;
  gap: 2rem;

  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  /* cursor: pointer; */
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  transition: background-color 0.2s ease-in-out;
  border-radius: 15px;
  padding: 0.8rem 1rem;
  box-shadow: 0 4px 40px rgb(0 0 0/ 10%);

  :hover {
    background-color: ${Colors.PrimaryDark};
  }
`;
const Avatar = styled.span`
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  height: 120px;
  width: 120px;
`;
const Name = styled.h4`
  font-weight: 400;
`;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Badge = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${Colors.Primary};

  ::after {
    content: ${(p) => (p.number ? `'${p.number}'` : "")};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${Colors.Background};
    font-size: 0.8rem;
  }
`;
const Amount = styled.span``;

const Items = [
  {
    Id: 1,
    hreflink: "/profile",
    Amount: "$400,000",
    Author: "Krishna",

    ImageSrc: "/images/User/Boy.png",
  },
  {
    Id: 2,
    hreflink: "/profile",
    Amount: "$600,000",
    Author: "Radha Rani",

    ImageSrc: "/images/User/Girl.png",
  },
  {
    Id: 3,
    hreflink: "/profile",
    Amount: "$700,000",
    Author: "Keshaba",

    ImageSrc: "/images/User/Boy1.png",
  },
  {
    Id: 4,
    hreflink: "/profile",
    Amount: "$200,000",
    Author: "Bikash",

    ImageSrc: "/images/User/Boy.png",
  },
  {
    Id: 5,
    hreflink: "/profile",
    Amount: "$100,000",
    Author: "Sid",

    ImageSrc: "/images/User/Boy1.png",
  },
  {
    Id: 6,
    hreflink: "/profile",
    Amount: "$600,000",
    Author: "Chira",

    ImageSrc: "/images/User/Girl.png",
  },
  {
    Id: 1,
    hreflink: "/profile",
    Amount: "$400,000",
    Author: "Krishna",

    ImageSrc: "/images/User/Boy.png",
  },
  {
    Id: 2,
    hreflink: "/profile",
    Amount: "$600,000",
    Author: "Radha Rani",

    ImageSrc: "/images/User/Girl.png",
  },
  {
    Id: 3,
    hreflink: "/profile",
    Amount: "$700,000",
    Author: "Keshaba",

    ImageSrc: "/images/User/Boy1.png",
  },
  {
    Id: 4,
    hreflink: "/profile",
    Amount: "$200,000",
    Author: "Bikash",

    ImageSrc: "/images/User/Boy.png",
  },
  {
    Id: 5,
    hreflink: "/profile",
    Amount: "$100,000",
    Author: "Sid",

    ImageSrc: "/images/User/Boy1.png",
  },
  {
    Id: 6,
    hreflink: "/profile",
    Amount: "$600,000",
    Author: "Chira",

    ImageSrc: "/images/User/Girl.png",
  },
];


const content = Items.map((i) =>
<Link href={i.hreflink} passHref key={i.Id}>
              <a>
                <Item>
                  <Avatar>
                    <Image
                      src={i.ImageSrc} 
                      // src={require('https://cdn-icons-png.flaticon.com/512/149/149071.png')}
                      height="120"
                      width="120"
                    />
                  </Avatar>
                  <Name>{i.Author}</Name>
                  <BottomSection>
                    <Badge number={i.Id} />
                    <Amount>{i.Amount}</Amount>
                  </BottomSection>
                </Item>
              </a>
            </Link>
);

export default function Carousel() {
  const [Slides, setSlides] = useState(Items);
  const [CurSlide, setCurSlide] = useState(Items[0]);
  const ItemContainerRef = useRef(null);
  // b => beginning | m => middle | e => end
  const [ScrollInd, setScrollInd] = useState("b");
  return (
    <CarouselEl>
      <Button>Best Selling</Button>
      <Title>Top Creators</Title>
      <Controls>
        <CtrlBtn
          active={ScrollInd === "e" || ScrollInd === "m"}
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft - 200,
              behavior: "smooth",
            });
          }}
        >
          <BsChevronLeft />
        </CtrlBtn>
        <CtrlBtn
          active={ScrollInd === "b" || ScrollInd === "m"}
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft + 200,
              behavior: "smooth",
            });
          }}
        >
          <BsChevronRight />
        </CtrlBtn>
      </Controls>
      <ItemContainer
        ref={ItemContainerRef}
        onScroll={(e) => {
          const { scrollWidth, scrollLeft, offsetWidth } = e.target;
          const SL = Math.ceil(scrollLeft + offsetWidth);
          if (scrollLeft <= 0) setScrollInd("b");
          if (scrollLeft > 0 && scrollLeft < scrollWidth) setScrollInd("m");
          if (SL >= scrollWidth) setScrollInd("e");
        }}
      >
               {content}
      </ItemContainer>
    </CarouselEl>
  );
}

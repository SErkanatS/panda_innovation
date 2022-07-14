import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../images/logo.svg";
import Instagram from "../../images/instagram.svg";
import Telegram from "../../images/telegram.svg";
import Linkedin from "../../images/linkedin.svg";
import TikTok from "../../images/tiktok.svg";
import Whatsapp from "../../images/whatsapp.svg";
import Line from "../../images/line.svg";
import Comp from "../../images/composition.svg";
import Tele from "../../images/Telephone.svg";
import {
  Nav,
  NavLogo,
  Wrapper,
  NavItem,
  NavButton,
  SideBar,
  Icons,
  Link,
  Header,
  HiddenHeader,
  Container,
  Composition,
  CompositionImg,
  HiddenNavButton,
  MobileIcon,
  BurgerLinks,
  BurgerItem,
  NavMenu,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <IconContext.Provider value={{ color: "#02d77c" }}>
      <Wrapper>
        <Nav>
          <NavItem>
            <NavLogo src={logo} />
          </NavItem>
          <NavMenu onClick={handleClick} click={click}>
              <BurgerItem>
                <BurgerLinks to="/services">Услуги</BurgerLinks>
              </BurgerItem>
              <BurgerItem>
                <BurgerLinks to="/portfolio">Портфолио</BurgerLinks>
              </BurgerItem>
              <BurgerItem>
                <BurgerLinks to="/team">Команда</BurgerLinks>
              </BurgerItem>
            </NavMenu>
          <NavItem>
            <NavButton>Связаться с нами</NavButton>
            <HiddenNavButton>
              <NavLogo src={Tele} />
            </HiddenNavButton>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </NavItem>
        </Nav>

        <HiddenHeader>
          Превратим идею в<br />
          <p>реальный проект</p>
        </HiddenHeader>
        <Container>
          <SideBar>
            <Link>
              <Icons src={Line} />
            </Link>
            <Link href="/insta">
              <Icons src={Instagram} />
            </Link>
            <Link href="/telega">
              <Icons src={Telegram} />
            </Link>
            <Link href="/linkedin">
              <Icons src={Linkedin} />
            </Link>
            <Link href="/tiktok">
              <Icons src={TikTok} />
            </Link>
            <Link href="/whatsapp">
              <Icons src={Whatsapp} />
            </Link>
            <Icons src={Line} />
          </SideBar>
          <Composition>
            <CompositionImg src={Comp} />
          </Composition>
        </Container>
        <Header>
          Превратим идею в<br />
          <p>реальный проект</p>
        </Header>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Navbar;

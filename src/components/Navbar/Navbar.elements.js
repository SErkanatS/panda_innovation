import styled from "styled-components";
import hero from "../../images/hero.svg";

export const Nav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

  display: flex;
  width: 100%;
  max-width: 1300px;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-inline: auto;
  background: none;
  font-family: Mulish, serif;
  transition: 0.5s ease;

  a {
    color: #fff;
    text-decoration: none;
    font-family: Mulish, serif;
  }

  @media screen and (max-width: 1400px) {
    max-width: 900px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 1000px) {
    max-width: 700px;
    transition: 0.5s ease;
  }
`;

export const NavLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 740px) {
    margin-left: 20px; 
  }
`;

export const Wrapper = styled.div`
  /* background-image: url(${hero}) !important; */
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-color: #000;
  background-size: 100% 100%;
  background-position: 50% 50%;
  height: 150vh;
  border-bottom-left-radius: 40%;
  z-index: -1;

  @media screen and (max-width: 500px) {
    border-bottom-left-radius: 20%;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const NavButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

  border: 2px solid #00d185;
  background: linear-gradient(#02d77c 0%, rgba(2, 215, 124, 0.03) 100%);
  outline: none;
  color: #ffffff;
  padding: 12px;
  font-family: Mulish, serif;
  font-weight: 400;
  font-size: 20px;
  border-radius: 10px;

  &:active {
    background: linear-gradient(rgba(2, 215, 124, 0.03) 0%, #02d77c 100%);
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const HiddenNavButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
  display: none;
  border: 2px solid #00d185;
  background: linear-gradient(#02d77c 0%, rgba(2, 215, 124, 0.03) 100%);
  outline: none;
  color: #ffffff;
  padding: 12px;
  font-family: Mulish, serif;
  font-weight: 400;
  font-size: 20px;
  border-radius: 10px;

  &:active {
    background: linear-gradient(rgba(2, 215, 124, 0.03) 0%, #02d77c 100%);
  }

  @media screen and (max-width: 1000px) {
    display: block;
  }

  @media screen and (max-width: 740px) {
    display: none;
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: auto;
  max-width: 1300px;
  height: fit-content;
  margin-inline: auto;
  @media screen and (max-width: 1400px) {
    max-width: 900px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Icons = styled.img`
  color: white;

  &:hover {
    color: #00d185;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Header = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  margin: 50px 0;
  text-align: center;
  color: white;
  font-family: "Arial";
  font-style: normal;
  font-weight: 999;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: 0.1em;
  -webkit-text-fill-color: #0000002a;
  -webkit-text-stroke-color: #ffffff;
  -webkit-text-stroke-width: 3px;

  p {
    margin: 0;
    -webkit-text-stroke-color: #00d185;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #000000, 0 0 10px #000000, 0 0 10px #00d17f,
        0 0 10px #00d17f, 0 0 10px #00d17f, 0 0 15px #00d17f, 0 0 15px #00d17f;
    }
    to {
      text-shadow: 0 0 10px #000000, 0 0 10px #0bfa63, 0 0 10px #0bfa63,
        0 0 10px #0bfa63, 0 0 10px #0bfa63, 0 0 10px #0bfa63, 0 0 10px #0bfa63;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const HiddenHeader = styled.p`
  display: none;
  margin: 50px 0;
  text-align: center;
  color: white;
  font-family: "Arial";
  font-style: normal;
  font-weight: 999;
  font-size: 50px;
  letter-spacing: 0.1em;
  -webkit-text-fill-color: #0000002a;
  -webkit-text-stroke-color: #ffffff;
  -webkit-text-stroke-width: 3px;

  p {
    margin: 0;
    -webkit-text-stroke-color: #00d185;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #000000, 0 0 10px #000000, 0 0 10px #00d17f,
        0 0 10px #00d17f, 0 0 10px #00d17f, 0 0 15px #00d17f, 0 0 15px #00d17f;
    }
    to {
      text-shadow: 0 0 10px #000000, 0 0 10px #0bfa63, 0 0 10px #0bfa63,
        0 0 10px #0bfa63, 0 0 10px #0bfa63, 0 0 10px #0bfa63, 0 0 10px #0bfa63;
    }
  }

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;

  @media screen and (max-width: 1400px) {
    max-width: 900px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    max-width: 600;
    transition: 0.5s ease;
  }
`;
export const Composition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const CompositionImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 620px) {
    width: 400px;
    height: auto;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 740px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 90px;
    left: ${({ click }) => (click ? "-8%" : "-110%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }

  @media screen and (max-width: 525px) {
    left: ${({ click }) => (click ? "-10%" : "-110%")};
  }
`;

export const BurgerItem = styled.li`
  height: 90px;
  border-bottom: 2px solid transparent;
  text-align: center;
  &:hover {
    border-bottom: 2px solid #02d77c;
  }

  @media screen and (max-width: 740px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const BurgerLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 740px) {
    text-align: center;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    &:hover {
      color: #02d77c;
      transition: all 0.3s ease;
    }
  }
`;

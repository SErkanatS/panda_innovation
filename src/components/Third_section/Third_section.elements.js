import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  color: #000;
  position: relative;
  transform: scale(1);

  @media screen and (max-width: 1400px) {
    max-width: 880px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    max-width: 600;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 600px) {
    max-width: 300px;
    transition: 0.5s ease;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SectionButton = styled.button`
  color: #fff;
  border-radius: 100%;
  border: none;
  outline: none;
  background: #9ca3af;
  font-size: 30px;
  padding: 0 25px;

  &:active {
    background: #1f2937;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  }
  @media screen and (max-width: 600px) {
  padding: 25px;
    transition: 0.5s ease;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin-inline: auto;
  gap: 15px;
  width: 1300px;
  overflow-x: scroll;
  padding: 20px 0;
  transition: 0.5s ease-in-out;

  ::-webkit-scrollbar {
    width: 10px;
    margin: 20px 0;
  }

  ::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: #000;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #000;
  }

  @media screen and (max-width: 1400px) {
    max-width: 880px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    max-width: 600px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 600px) {
    max-width: 250px;
    transition: 0.5s ease;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 642px !important;
  height: 317px;
  background: #ffffff;
  border: 0.5px solid #e3e3e3;
  padding: 20px 40px;
  box-shadow: 4px 4px 10px #18202f, inset 4px 4px 10px rgba(255, 255, 255, 0.3);
  border-radius: 15px;

  @media screen and (max-width: 600px) {
    width: 250px !important;
  }
`;

export const CardSections = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.img`
  display: block;
  width: auto;
  height: 277px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const CardLogo = styled.img`
  display: block;
  width: 170px;
  height: auto;
`;

export const CardDescription = styled.p`
  display: block;
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  width: 300px;
`;

export const CardComponents = styled.p`
  background: #4b5563;
  border-radius: 5px;
  color: white;
  padding: 5px;
  width: fit-content;
`;

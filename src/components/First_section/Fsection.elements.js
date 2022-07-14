import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  color: white;
  position: relative;
  transform: scale(1);
  top: -250px;
  height: 200px;

  @media screen and (max-width: 1400px) {
    max-width: 880px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    max-width: 600px;
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
  color: #000;
  border: none;
  border-radius: 100%;
  outline: none;
  background: #d1d5db;
  font-size: 30px;
  padding: 0 25px;

  &:active {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  }

  @media screen and (max-width: 600px) {
  padding: 25px;
    transition: 0.5s ease;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 1300px;
  margin-inline: auto;
  gap: 15px;
  overflow-x: scroll;
  padding: 20px 0;
  transition: 0.5s ease-in-out;

  ::-webkit-scrollbar {
    width: 10px;
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
  height: 250px;
  width: 250px;
  background: #9ca3af;
  border: 0.3px solid #5e6673;
  box-shadow: 4px 4px 10px #18202f, inset 4px 4px 10px rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 22px;
  transition: 0.5s ease;
`;

export const CardImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const CardName = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

export const CardDescription = styled.p`
  font-style: normal;
  width: 200px;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

import styled from "styled-components";

export const SsectionContainer = styled.div`
   width: 100%;
   max-width: 1300px;
   margin-inline: auto;
   display: flex;
   align-items: center;
   justify-content: space-around;

   @media screen and (max-width: 1400px) {
    max-width: 880px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 600px) {
    padding: 50px 0;
    max-width: 500px;
    text-align: center;
    flex-direction: column;
    margin: 20px 0;
    transition: 0.5s ease;
  }
`;

export const SsectionHeader = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  font-variant: small-caps;
  color: #181818;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    transition: 0.5s ease;
  }
`;

export const SsectionButton = styled.a`
   border: none;
   outline: none;
   background: #00B76F;
   border-radius: 15px;
   font-weight: 600;
   color: #fff;
   font-size: 32px;
   line-height: 100%;
   padding: 15px;
   cursor: ponter;
   text-decoration: none;


   &:active{
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
   }
`;

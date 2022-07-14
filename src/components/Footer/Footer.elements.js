import styled from "styled-components";

export const FooterWrapper = styled.div`
padding-top: 36px;
    background-color: #000;
  width:100%;
`

export const FooterBlock = styled.footer`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
    display: flex;
    font-family: "Montserrat";
    color: white;
    align-items: start;
    max-width: 1300px;
    width: 100%;
    margin-inline: auto;
    justify-content: space-between;

   h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 25px;
      line-height: 30px;
      color: #f9fafb;
      margin: 0;
   }

   

   @media screen and (max-width: 1350px){
      width: 100%;
      max-width: 1000px;
   }

   @media screen and (max-width: 1100px){
         width: 100%;
         max-width: 700px;
   }

   @media screen and (max-width: 800px){
    justify-content: space-around;

   }
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 38px;
  align-items: start;

  @media screen and (max-width: 1350px){
   flex-direction: column;
  }
`;

export const FooterNumbers = styled.div`
  display: flex;
  gap: 38px;
  align-items: start;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    color: #fff;
    margin-bottom: 15px;
  }
`;

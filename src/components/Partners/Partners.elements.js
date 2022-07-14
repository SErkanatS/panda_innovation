import styled from "styled-components";

export const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const PartnersHerder = styled.h1`
  font-weight: 999;
`;
export const PartnerImg = styled.img`
  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 50px;

  @media screen and (max-width: 1000px) {
   flex-direction: column;
  }
`;

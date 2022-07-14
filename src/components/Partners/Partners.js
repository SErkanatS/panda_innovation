import React from "react";
import {
  PartnerContainer,
  PartnersHerder,
  PartnerImg,
  ImageContainer,
} from "./Partners.elements";
import AH from "../../images/HubLogo.svg";
import TerriconValley from "../../images/TerriconValley.svg";
import TheBrain from "../../images/TheBrain.svg";
import House from "../../images/House.svg";


function Partners() {
  return (
    <PartnerContainer>
      <PartnersHerder>Наши партнёры</PartnersHerder>
      <ImageContainer>
        <PartnerImg src={AH} />
        <PartnerImg src={TerriconValley} />
        <PartnerImg src={TheBrain} />
        <PartnerImg src={House} />
      </ImageContainer>
    </PartnerContainer>
  );
}

export default Partners;

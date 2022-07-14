import React from "react";
import { useRef } from "react";
import SecondCard from "./Second_card";
import Logo from "../../images/card_logo.svg";
import Phone from '../../images/phone.svg'
import {
  Section,
  SectionHeader,
  SectionButtons,
  SectionButton,
  CardContainer,
} from "./Third_section.elements";

function Third_section() {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <Section>
      <SectionHeader>
        <h1>С нами ты можешь</h1>
        <SectionButtons>
          <SectionButton onClick={() => scroll(-250)}>←</SectionButton>
          <SectionButton onClick={() => scroll(250)}>→</SectionButton>
        </SectionButtons>
      </SectionHeader>
      <CardContainer>
        <SecondCard
          logo={Logo}
          description="Приложение для координации работы ресторанов и заказов."
          img={Phone}
          comp="UI/UX"
        />
        <SecondCard
          logo={Logo}
          description="Приложение для координации работы ресторанов и заказов."
          img={Phone}
          comp="UI/UX"
        /> 
        <SecondCard
          logo={Logo}
          description="Приложение для координации работы ресторанов и заказов."
          img={Phone}
          comp="UI/UX"
        /> 
      </CardContainer>
    </Section>
  );
}

export default Third_section;

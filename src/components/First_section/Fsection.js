import React from "react";
import {
  Section,
  SectionHeader,
  SectionButtons,
  SectionButton,
  CardContainer,
} from "./Fsection.elements";
import IOS from "../../images/ios.svg";
import Android from "../../images/android.svg";
import Backend from "../../images/backend.svg";
import Web from "../../images/web.svg";
import { useRef } from "react";
import Card from "./Card";

function Fsection() {
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
      <CardContainer ref={ref} smooth={true}>
        <Card
          img={IOS}
          name="IOS"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
        <Card
          img={Android}
          name="Android"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
        <Card
          img={Backend}
          name="Backend"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
        <Card
          img={Web}
          name="WEB"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
        <Card
          img={IOS}
          name="IOS"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
        <Card
          img={Android}
          name="Android"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
        <Card
          img={Backend}
          name="Backend"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
        <Card
          img={Web}
          name="WEB"
          description="Сделать свой MVP функциональным и быть уверенным в его работе."
        />
      </CardContainer>
    </Section>
  );
}

export default Fsection;

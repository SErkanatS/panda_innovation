import React from "react";
import Member from "./Member";
import Avatar from "../../images/Avatar.png";
import {
  TeamWrapper,
  TeamContainer,
  TeamHeader,
  Squad,
  Squad2,
  TeamButtonContainer,
  TeamButton,
} from "./Team.components";

function Team() {
  return (
    <TeamWrapper>
        <TeamHeader>Наша команда:</TeamHeader>
      <TeamContainer>
        <Squad>
          <Member href="/member" img={Avatar} name="Айдер" job="СЕО" />
          <Member href="/member" img={Avatar} name="Айдер" job="СЕО" />
          <Member href="/member" img={Avatar} name="Айдер" job="СЕО" />
        </Squad>
        <Squad2>
          <Member href="/member" img={Avatar} name="Айдер" job="СЕО" />
          <Member href="/member" img={Avatar} name="Айдер" job="СЕО" />
        </Squad2>
      </TeamContainer>
      <TeamButtonContainer>
        <TeamButton href="/squad">Полный состав →</TeamButton>
      </TeamButtonContainer>
    </TeamWrapper>
  );
}

export default Team;

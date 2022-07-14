import React from "react";
import Panda from "../../images/panda.svg";
import {
  ConluntationWrapper,
  ConluntationContainer,
  LeftSide,
  RightSide,
  LeftHeader,
  LeftImg,
  RightInput,
  RightTextArea,
  RightButtonHolder,
  RightButton,
} from "./Consultation.components";

const Consultation = () => {
  return (
    <ConluntationWrapper>
      <ConluntationContainer>
        <LeftSide>
          <LeftHeader>
            Хотите записаться <br />
            на бесплатную <br />
            консульацию?
          </LeftHeader>
          <LeftImg src={Panda} />
        </LeftSide>
        <RightSide>
          <RightInput type="text" placeholder="Имя Фамилия" />
          <RightInput type="text" placeholder="Номер телефона с WhatsApp" />
          <RightTextArea
            placeholder="Кратко опишите свой проект"
            rows="10"
            cols="50"
          ></RightTextArea>
          <RightButtonHolder>
            <RightButton>
            Запись
            </RightButton>
          </RightButtonHolder>
        </RightSide>
      </ConluntationContainer>
    </ConluntationWrapper>
  );
};

export default Consultation;

import React from "react";
import {
  FooterWrapper,
  FooterBlock,
  FooterContainer,
  FooterLinks,
  FooterNumbers,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterWrapper>
      <FooterBlock>
        <FooterContainer>
          <h1>Сервисы</h1>
          <FooterLinks>
            <a href="/partnership">Партнерство</a>
            <a href="/price_list">Прайслист</a>
            <a href="/projects">Проекты</a>
          </FooterLinks>
        </FooterContainer>
        <FooterContainer>
          <h1>Связь с нами</h1>
          <FooterNumbers>
            <FooterLinks>
              <a href="#s">+7 700 777 00 77</a>
              <a href="#s">Мангилик Ел С-3.6</a>
            </FooterLinks>
            <FooterLinks>
              <a href="#s">+7 777 222 02 02</a>
              <a href="#s">Мангилик Ел С-4.6</a>
            </FooterLinks>
          </FooterNumbers>
        </FooterContainer>
      </FooterBlock>
    </FooterWrapper>
  );
}

export default Footer;

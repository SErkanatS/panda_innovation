import styled from "styled-components";
import Decoration from '../../images/decoration.svg'

export const Background = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url(${Decoration});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 1300px;
  margin: 100px auto; 

  @media screen and (max-width: 1400px) {
    max-width: 900px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    max-width: 600;
    transition: 0.5s ease;
  }
`;

export const Header = styled.p`
  text-align: center;
  font-weight: lighter;
  font-size: 30px;
  line-height: 100%;
  font-variant: small-caps;

`;
export const HeartImg = styled.img`
  width: 50px;
  height: 50px;
  transition: .5s ease;

  &:hover{
   transform: scale(1.2);
   transition: .5s ease;
  }
`;

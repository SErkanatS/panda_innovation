import styled from "styled-components";

export const ConluntationWrapper = styled.div`
  padding-top: 50px;
  background-color: #000;
`;

export const ConluntationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;

  @media screen and (max-width: 1350px){
   flex-direction: column;
   align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1350px){
   align-items: center;
  }
  
`;

export const LeftHeader = styled.h1`
  color: white;
`;

export const LeftImg = styled.img`
  height: 225px;
  width: 225px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const RightInput = styled.input`
  background: #f3f4f6;
  border: 1px solid #000000;
  outline: none;
  border-radius: 10px;
  width: 100%;
  height: 39px;
  padding: 5px 0px 5px 20px;
  &::placeholder {
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #a5a5a5;
  }
`;

export const RightTextArea = styled.textarea`
  background: #f3f4f6;
  border: 1px solid #000000;
  outline: none;
  border-radius: 10px;
  width: 100%;
  padding: 5px 0px 5px 20px;
  font-size: 20px;
  resize: none;
  &::placeholder {
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #a5a5a5;
  }
`;

export const RightButtonHolder = styled.div`
  display: flex;
  justify-content: end;

  @media screen and (max-width: 1350px){
  justify-content: center;
  }
`;

export const RightButton = styled.button`
  background: linear-gradient(180deg, #00d185 70.56%, #47f258 100%);
  border-radius: 7px;
  outline: none;
  border: none;
  color: #000;
  padding: 5px 20px;
  font-size: 20px;
  margin: 20px 0;

  &:active {
    background: linear-gradient(180deg, #47f258 70.56%, #00d185 100%);
  }
`;

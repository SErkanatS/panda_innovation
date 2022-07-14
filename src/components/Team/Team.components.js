import styled from "styled-components";

export const TeamWrapper = styled.div`
  padding-top: 50px;
  border-top-right-radius: 40%;
  background-color: #000;
  @media screen and (max-width: 700px) {
    border-top-right-radius: 20%;
  }
`;

export const TeamContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;

export const TeamHeader = styled.h1`
  font-weight: 700;
  font-size: 31.64px;
  line-height: 39px;
  color: white;
  text-align: center;
`;

export const Squad = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const Squad2 = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -100px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    top: 0;
    padding: 100px 50px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const MemberContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const MemberAvatar = styled.img`
  border-radius: 100%;
  height: 150px;
  width: 150px;
`;

export const Name = styled.h1`
  font-weight: 900;
  margin: 5px 0;
  color: white;
`;

export const JobTitle = styled.p`
  font-weight: 200;
  font-size: 30px;
  margin: 0;
  color: white;
`;

export const TeamButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
`;
export const TeamButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: white;
  background: none;
  font-weight: 600;
  transition: 0.5s ease;
  font-size: 25px;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

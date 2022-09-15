import styled from "styled-components";
import Hero, { HeroInterface } from "./Hero/Hero";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 10px;
  justify-content: center;
  color: white;
  backdrop-filter: blur(5px);
  user-select: none;
  background-color: rgba(41, 59, 72, 0.3);
  z-index: 2;

  img {
    height: 100px;
  }

  h2 {
    font-size: 1rem;
    font-family: "Orbitron", serif;
    margin-right: 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 4px;

    img{
      height: 50px;
    }
  }
`;

export const StyledHero = styled(Hero)<HeroInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  height: 100px;
  width: 100%;
  opacity: ${(props) => (props.found ? 0.3 : 1)};

  @media screen and (max-width: 500px) {
    h2{
      margin-right: 5px;
    }
  }
`;



import styled from "styled-components";
import Hero from "./Hero/Hero";

interface Props {
  name: string;
  image: string;
  found: boolean;
}

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 10px;
  justify-content: center;
  color: white;
  /* backdrop-filter: blur(5px); */
  user-select: none;
  background-color: rgba(41, 59, 72, 0.3);
  z-index: 2;

  img {
    height: 100px;
  }

  h2 {
    font-size: 1rem;
  }
`;

export const StyledHero = styled(Hero)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100px;
  width: 100%;
  opacity: ${(props) => (props.found ? 0.3 : 1)};
`;



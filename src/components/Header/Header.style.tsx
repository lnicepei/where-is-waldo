import React from "react";
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
  position: absolute;
  top: 0;
  width: 100vw;
  padding: 10px;
  justify-content: center;
  color: white;
  backdrop-filter: blur(10px);
  user-select: none;

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
  margin: auto;
  height: 100px;
  opacity: ${(props) => (props.found ? 0.3 : 1)};
`;

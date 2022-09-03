import React, { useState, useContext } from "react";
import { AppContext } from "../Game/Game";
import { StyledHeader, StyledHero } from "./Header.style";

const Header = () => {
  const { heroes } = useContext(AppContext);

  return (
    <StyledHeader>
      {heroes.map((hero) => {
        return (
          <StyledHero name={hero.name} image={hero.image} found={hero.found} />
        );
      })}
    </StyledHeader>
  );
};

export default Header;

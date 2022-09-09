import React from "react";

import { HeroInterface } from "../Game/Game";
import { StyledHeader, StyledHero } from "./Header.style";

import { useAppSelector } from "../../App/hooks";

const Header = () => {
  const heroes = useAppSelector((state) => state.heroes.value);
  const currentSearchImageURL = useAppSelector(
    (state) => state.currentSearchImage.currentSearchImageURL
  );

  return (
    <>
      {currentSearchImageURL && (
        <StyledHeader>
          {heroes.map((hero: HeroInterface) => {
            return (
              <StyledHero
                name={hero.name}
                image={hero.image}
                found={hero.found}
                key={hero.name}
              />
            );
          })}
        </StyledHeader>
      )}
    </>
  );
};

export default Header;

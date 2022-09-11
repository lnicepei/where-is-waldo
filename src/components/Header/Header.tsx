import React from "react";

import { HeroInterface } from "../Header/Hero/Hero";
import { StyledHeader, StyledHero } from "./Header.style";

import { useAppSelector } from "../../App/hooks";
import Timer from "../../Timer/Timer";

const Header = () => {
  const heroes = useAppSelector((state) => state.heroes.value);
  
  const currentSearchImageURL = useAppSelector(
    (state) => state.currentSearchImage.currentSearchImageURL
  );

  const isCounting = useAppSelector((state) => state.time.isCounting);

  return (
    <>
      {currentSearchImageURL && isCounting && (
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
      {isCounting && <Timer />}
    </>
  );
};

export default Header;

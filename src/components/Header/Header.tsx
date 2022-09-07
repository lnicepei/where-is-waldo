import React, { useContext } from "react";

import { AppContext } from "../Game/Game";
import { StyledHeader, StyledHero } from "./Header.style";

import { useSelector, useDispatch } from "react-redux";
import { getHeroes } from "../Game/SearchImage";

const Header = () => {
  const { heroes } = useContext(AppContext);

  // const hero = useSelector((state) => state.hero.value);

  // const dispatch = useDispatch();
  // console.log(hero.name, hero.found, hero.image);
  return (
    <StyledHeader>
      {heroes.map((hero) => {
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
  );
};

export default Header;

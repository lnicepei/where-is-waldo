import React, { useState, useContext } from "react";
import { AppContext } from "../Game/Game";
import "./Header.css";
import Hero from "./Hero/Hero";

const Header = () => {
  const { heroes } = useContext(AppContext);

  return (
    <header>
      {heroes.map((hero) => (
        <Hero name={hero.name} image={hero.image} found={hero.found} />
      ))}
    </header>
  );
};

export default Header;

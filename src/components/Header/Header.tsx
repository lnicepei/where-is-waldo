import React from "react";
import "./Header.css";
import Hero from "./Hero/Hero";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <Hero
        name="Imposter"
        image="https://cdn.iconscout.com/icon/free/png-256/blue-among-us-3218506-2691064.png"
      />
      <Hero
        name="Keanu"
        image="https://www.pngall.com/wp-content/uploads/4/Cyberpunk-2077-Keanu-Reeves-Transparent.png"
      />
      <Hero
        name="Steve"
        image="https://upload.wikimedia.org/wikipedia/en/e/e7/Steve_%28Minecraft%29.png"
      />
    </header>
  );
};

export default Header;

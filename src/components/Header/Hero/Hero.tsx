import React from "react";

interface HeroProps {
  name: string;
  image: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="hero">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Hero;

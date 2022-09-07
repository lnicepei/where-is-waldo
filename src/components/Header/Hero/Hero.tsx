import React from "react";

interface HeroProps {
  name: string;
  image: string;
  found: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className={props.className}>
      <h2 className="hero--name">{props.name}</h2>
      <img className="hero--img" src={props.image} alt={props.name} />
    </div>
  );
};

export default Hero;

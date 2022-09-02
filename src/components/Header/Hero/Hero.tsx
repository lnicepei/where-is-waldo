import React from "react";
import "./Hero.css";

interface HeroProps {
  name: string;
  image: string;
  found: boolean;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="hero">
      {!props.found && <h2 className="hero--name">{props.name}</h2>}
      {!props.found && (
        <img className="hero--img" src={props.image} alt={props.name} />
      )}
      {props.found && <h2 className="hero--name found">{props.name}</h2>}
      {props.found && (
        <img className="hero--img found" src={props.image} alt={props.name} />
      )}
    </div>
  );
};

export default Hero;

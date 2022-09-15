import React from "react";

export interface HeroInterface {
  /** name of a character */
  name: string;
  /** path to its image in ./HeroImages folder */
  image: string;
  /** if true -> turns opacity to .3 */
  found: boolean;
  /** allows using styled components */
  className?: string;
}

const Hero: React.FC<HeroInterface> = (props) => {
  const url = new URL(props.image, import.meta.url).href;
  
  return (
    <div className={props.className}>
      <h2>{props.name}</h2>
      <img src={url} alt={props.name} />
    </div>
  );
};

export default Hero;

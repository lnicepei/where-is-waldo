import React, { useContext } from "react";
import { AppContext, HeroInterface } from "../../Game/Game";
import { StyledChooseCard, StyledChooseImage } from "../SearchImage.style";

interface SearchImageChoiceCardProps {
  url: string;
  name: string;
  heroes: HeroInterface[];
}

const SearchImageChoiceCard: React.FC<SearchImageChoiceCardProps> = (props) => {
  const { setCurrentSearchImageURL, setHeroes, setCurrentSearchImage } =
    useContext(AppContext);

  const handleChoiceClick = () => {
    // FIXME: you can't play the same game twice
    setHeroes(props.heroes);
    setCurrentSearchImage(props.name);
    setCurrentSearchImageURL(props.url);
  };

  return (
    <StyledChooseCard>
      <h1>{props.name}</h1>
      <StyledChooseImage src={props.url} alt={props.name} />
      <button onClick={handleChoiceClick}>Choose</button>
    </StyledChooseCard>
  );
};

export default SearchImageChoiceCard;

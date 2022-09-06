import React, { useContext } from "react";
import { AppContext, HeroInterface } from "../../Game/Game";
import { StyledChooseCard, StyledChooseImage } from "../SearchImage.style";

interface SearchImageChoiceCardProps {
  url: string;
  name: string;
  heroes: HeroInterface[];
}

const SearchImageChoiceCard: React.FC<SearchImageChoiceCardProps> = (props) => {
  const {
    setWasImageChosen,
    setCurrentSearchImageURL,
    setHeroes,
    setCurrentSearchImage,
  } = useContext(AppContext);

  const handleChoiceClick = () => {
    // TODO: choose current game image on this button click
    setHeroes(props.heroes);
    setCurrentSearchImage(props.name);
    setCurrentSearchImageURL(props.url);
    setWasImageChosen((prevWasImageChosen) => !prevWasImageChosen);
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
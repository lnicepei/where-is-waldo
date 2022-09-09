import React from "react";
import { useAppDispatch } from "../../../App/hooks";
import { HeroInterface } from "../../Header/Hero/Hero";
import { setHeroes } from "../../Game/GameSlice";
import { StyledChooseCard, StyledChooseImage } from "../SearchImage.style";
import {
  setCurrentSearchImage,
  setCurrentSearchImageURL,
} from "../SearchImageSlice";

interface SearchImageChoiceCardProps {
  url: string;
  name: string;
  heroes: HeroInterface[];
}

const SearchImageChoiceCard: React.FC<SearchImageChoiceCardProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleChoiceClick = () => {
    dispatch(
      setHeroes(
        props.heroes.map((hero) => {
          return { ...hero, found: false };
        })
      )
    );
    dispatch(setCurrentSearchImage(props.name));
    dispatch(setCurrentSearchImageURL(props.url));
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

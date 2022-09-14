import React from "react";
import { StyledChooseCard, StyledChooseImage } from "../SearchImage.style";

import {
  setCurrentSearchImage,
  setCurrentSearchImageURL,
} from "../SearchImageSlice";

import { useAppDispatch } from "../../../App/hooks";
import { HeroInterface } from "../../Header/Hero/Hero";
import { setHeroes } from "../../../App/AppSlice";

interface SearchImageChoiceCardProps {
  /** link to ./SearchImages photo */
  url: string;
  /** name search image */
  name: string;
  /** heroes to be found */
  heroes: HeroInterface[];
}

const SearchImageChoiceCard: React.FC<SearchImageChoiceCardProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleChoiceClick = () => {
    dispatch(setCurrentSearchImage(props.name));
    dispatch(setCurrentSearchImageURL(props.url));
    dispatch(
      setHeroes(
        props.heroes.map((hero) => {
          return { ...hero, found: false };
        })
      )
    );
  };

  return (
    <StyledChooseCard onClick={handleChoiceClick}>
      <h1>{props.name}</h1>
      <StyledChooseImage src={props.url} alt={props.name} />
    </StyledChooseCard>
  );
};

export default SearchImageChoiceCard;

import React from "react";
import {
  StyledChooseCard,
  StyledChooseImage,
  StyledChooseImageTitle,
} from "../SearchImage.style";

import {
  setCurrentSearchImage,
  setCurrentSearchImageURL,
} from "../SearchImageSlice";

import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { HeroInterface } from "../../Header/Hero/Hero";
import { setHeroes } from "../../../App/AppSlice";

export interface SearchImageChoiceCardProps {
  /** link to ./SearchImages photo */
  url: string;
  /** name search image */
  name: string;
  /** heroes to be found */
  heroes: HeroInterface[];
}

const SearchImageChoiceCard: React.FC<SearchImageChoiceCardProps> = (props) => {
  const searchImageURL = useAppSelector(
    (state) => state.currentSearchImage.currentSearchImageURL
  );

  const isThisImage = props.url === searchImageURL;

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
    <StyledChooseCard onClick={handleChoiceClick} isThisImage={isThisImage}>
      <StyledChooseImageTitle>{props.name}</StyledChooseImageTitle>
      <StyledChooseImage
        isThisImage={isThisImage}
        src={props.url}
        alt={props.name}
      />
    </StyledChooseCard>
  );
};

export default SearchImageChoiceCard;

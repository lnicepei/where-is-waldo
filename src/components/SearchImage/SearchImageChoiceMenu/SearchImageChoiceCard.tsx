import React from "react";
import { StyledChooseCard, StyledChooseImage } from "../SearchImage.style";

import {
  setCurrentSearchImage,
  setCurrentSearchImageURL,
} from "../SearchImageSlice";
import { setIsCounting, setTime } from "../../../Timer/TimerSlice";
import { useAppDispatch } from "../../../App/hooks";
import { HeroInterface } from "../../Header/Hero/Hero";
import { setHeroes } from "../../../App/AppSlice";

interface SearchImageChoiceCardProps {
  url: string;
  name: string;
  heroes: HeroInterface[];
}

const SearchImageChoiceCard: React.FC<SearchImageChoiceCardProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleChoiceClick = () => {
    // dispatch(
    //   setHeroes(
    //     props.heroes.map((hero) => {
    //       return { ...hero, found: false };
    //     })
    //   )
    // );
    // dispatch(setIsCounting(true));
    // dispatch(setTime(new Date()));
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
      {/* <button onClick={handleChoiceClick}>Choose</button> */}
    </StyledChooseCard>
  );
};

export default SearchImageChoiceCard;

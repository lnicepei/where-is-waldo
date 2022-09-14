import React from "react";
import { useAppDispatch } from "../../../App/hooks";
import { setIsCounting, setTime } from "../../Timer/TimerSlice";
import {
  StyledMenu,
  StyledMenuImagesContainer,
  StyledPlayButton,
} from "../SearchImage.style";
import searchImages from "../SearchImages";
import SearchImageChoiceCard from "./SearchImageChoiceCard";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChoiceClick = () => {
    dispatch(setIsCounting(true));
    dispatch(setTime(new Date().toISOString()));
  };

  const menuImages = searchImages.map((image) => {
    return (
      <SearchImageChoiceCard
        name={image.name}
        url={image.url}
        heroes={image.heroes}
        key={image.name}
      />
    );
  });

  return (
    <StyledMenu>
      <StyledMenuImagesContainer>{menuImages}</StyledMenuImagesContainer>
      <StyledPlayButton onClick={handleChoiceClick}>Play!</StyledPlayButton>
    </StyledMenu>
  );
};

export default Menu;

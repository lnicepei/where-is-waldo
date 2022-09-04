import React, { useRef, useState, useContext } from "react";
import {
  StyledSearchContainer,
  StyledSearchImage,
  StyledSearchImageChoiceMenu,
  StyledSearchImageContainer,
} from "./SearchImage.style";
import { AppContext } from "../Game/Game";

interface SearchImageProps {
  setCoordinateX: React.Dispatch<React.SetStateAction<number>>;
  setCoordinateY: React.Dispatch<React.SetStateAction<number>>;
  setWasClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchImage = (props: SearchImageProps) => {
  const imageRef = useRef(null);
  const { wasImageChosen, currentSearchImageURL } = useContext(AppContext);

  // sets the coordinates of crosshair to clicked position
  // and hides it after the following click
  const setCrosshairCoordinates = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (imageRef.current == e.target) {
      props.setCoordinateX(e.pageX);
      props.setCoordinateY(e.pageY);
      props.setWasClicked((prevWasClicked) => !prevWasClicked);
    }
  };

  return (
    <StyledSearchImageContainer>
      {wasImageChosen ? (
        <StyledSearchContainer onClick={(e) => setCrosshairCoordinates(e)}>
          <StyledSearchImage
            src={currentSearchImageURL}
            alt="Search Image"
            ref={imageRef}
          />
        </StyledSearchContainer>
      ) : (
        <StyledSearchImageChoiceMenu />
      )}
    </StyledSearchImageContainer>
  );
};

export default SearchImage;

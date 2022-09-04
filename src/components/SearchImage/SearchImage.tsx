import React, { useRef, useState, useContext } from "react";
import image from "./SearchImages/pierre-roussel-laptop-deksmat1.png";
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
  const { wasImageChosen } = useContext(AppContext);

  // sets the coordinates of crosshair to clicked position
  // and hides it after the following click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (imageRef.current == e.target) {
      props.setCoordinateX(e.pageX);
      props.setCoordinateY(e.pageY);
      props.setWasClicked((prevWasClicked) => !prevWasClicked);
    }
  };

  return (
    <StyledSearchImageContainer>
      {wasImageChosen ? (
        <StyledSearchContainer onClick={(e) => handleClick(e)}>
          <StyledSearchImage src={image} alt="Search Image" ref={imageRef} />
        </StyledSearchContainer>
      ) : (
        <StyledSearchImageChoiceMenu />
      )}
    </StyledSearchImageContainer>
  );
};

export default SearchImage;

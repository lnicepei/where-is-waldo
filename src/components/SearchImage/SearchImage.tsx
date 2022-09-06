import React, { useRef, useContext, useState } from "react";
import {
  StyledSearchContainer,
  StyledSearchImage,
  StyledSearchImageChoiceMenu,
  StyledSearchImageContainer,
} from "./SearchImage.style";
import { AppContext } from "../Game/Game";
import Crosshair from "../Crosshair/Crosshair";

const SearchImage = () => {
  const imageRef = useRef(null);
  const { currentSearchImageURL } = useContext(AppContext);

  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);
  const [wasClicked, setWasClicked] = useState(false);

  // sets the coordinates of crosshair to clicked position
  // and hides it after the following click
  const setCrosshairCoordinates = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (imageRef.current == e.target) {
      setCoordinateX(e.pageX);
      setCoordinateY(e.pageY);
      setWasClicked((prevWasClicked) => !prevWasClicked);
    }
  };

  console.log("SearchImage component rendered");

  return (
    <StyledSearchImageContainer>
      {currentSearchImageURL ? (
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
      {wasClicked && (
        <Crosshair
          coordinateX={coordinateX}
          coordinateY={coordinateY}
          setWasClicked={setWasClicked}
        />
      )}
    </StyledSearchImageContainer>
  );
};

export default SearchImage;

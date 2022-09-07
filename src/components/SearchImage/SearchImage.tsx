import React, { useRef, useContext, useState, useEffect } from "react";
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
  const { currentSearchImageURL, heroes, setHeroes, setCurrentSearchImageURL } =
    useContext(AppContext);

  const [crosshairCoordinateX, setCrosshairCoordinateX] = useState(0);
  const [crosshairCoordinateY, setCrosshairCoordinateY] = useState(0);
  const [wasClicked, setWasClicked] = useState(false);

  // sets the coordinates of crosshair to clicked position
  // and hides it after the following click
  const setCrosshairCoordinates = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (imageRef.current == e.target) {
      setCrosshairCoordinateX(e.pageX);
      setCrosshairCoordinateY(e.pageY);
      setWasClicked((prevWasClicked) => !prevWasClicked);
    }
  };

  // if all heroes were found -> restart the game and
  // clear current image url
  useEffect(() => {
    if (heroes.every((hero) => hero.found == true)) {
      setHeroes((prevHeroes) =>
        prevHeroes.map((hero) => {
          return { ...hero, found: false };
        })
      );
      setCurrentSearchImageURL("");
    }
  }, [heroes]);

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
      <Crosshair
        crosshairCoordinateX={crosshairCoordinateX}
        crosshairCoordinateY={crosshairCoordinateY}
        wasClicked={wasClicked}
        setWasClicked={setWasClicked}
      />
    </StyledSearchImageContainer>
  );
};

export default SearchImage;

import React, { useRef } from "react";
import image from "./pierre-roussel-laptop-deksmat1.png";
import { StyledSearchContainer, StyledSearchImage } from "./SearchImage.style";

interface SearchImageProps {
  setCoordinateX: React.Dispatch<React.SetStateAction<number>>;
  setCoordinateY: React.Dispatch<React.SetStateAction<number>>;
  setWasClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchImage = (props: SearchImageProps) => {
  const imageRef = useRef(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (imageRef.current == e.target) {
      //positions the crosshair
      props.setCoordinateX(e.pageX);
      props.setCoordinateY(e.pageY);
      props.setWasClicked((prevWasClicked) => !prevWasClicked);
    }
  };

  return (
    <StyledSearchContainer
      className="search-container"
      onClick={(e) => handleClick(e)}
    >
      <StyledSearchImage
        src={image}
        alt="Search Image"
        ref={imageRef}
        className="search-img"
      />
    </StyledSearchContainer>
  );
};

export default SearchImage;

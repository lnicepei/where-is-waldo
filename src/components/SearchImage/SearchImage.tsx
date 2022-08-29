import React, { useRef } from "react";
import "./SearchImage.css";

interface SearchImageProps {
  setCoordinateX: React.Dispatch<React.SetStateAction<number>>;
  setCoordinateY: React.Dispatch<React.SetStateAction<number>>;
  setWasClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchImage = (props: SearchImageProps) => {
  const imageRef = useRef(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (imageRef.current == e.target) {
      props.setCoordinateX(e.pageX - 25);
      props.setCoordinateY(e.pageY - 25);
      props.setWasClicked((prevWasClicked) => !prevWasClicked);
    }
  };

  return (
    <div className="image" onClick={(e) => handleClick(e)}>
      <img
        src="https://images5.alphacoders.com/700/700300.png"
        alt=""
        ref={imageRef}
        className="search-img"
      />
    </div>
  );
};

export default SearchImage;

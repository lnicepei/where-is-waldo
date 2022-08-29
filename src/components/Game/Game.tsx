import React, { useState } from "react";
import Crosshair from "../Crosshair/Crosshair";
import SearchImage from "../SearchImage/SearchImage";

const Game = () => {
  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <div className="App">
      <SearchImage
        setCoordinateX={setCoordinateX}
        setCoordinateY={setCoordinateY}
        setWasClicked={setWasClicked}
      />
      {wasClicked && (
        <Crosshair
          coordinateX={coordinateX}
          coordinateY={coordinateY}
          setWasClicked={setWasClicked}
        />
      )}
    </div>
  );
};

export default Game ;

import React, { useContext } from "react";
import "./Crosshair.css";

interface CrosshairProps {
  coordinateX: number;
  coordinateY: number;
  rightCoordinates: { name: string; position: string }[];
  setWasClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Crosshair = (props: CrosshairProps) => {
  const crosshairSyle = {
    left: props.coordinateX + "px",
    top: props.coordinateY + "px",
  };

  const centerStyle = {
    width: "50px",
    height: "50px",
  };

  const handleChoiceClick = (name: string) => {
    console.log(props.coordinateX, props.coordinateY);
    props.rightCoordinates.forEach((character, index) => {
      if (character[name]) {
        console.log(+character[name].split(" ")[0]);
        if (
          Math.abs(props.coordinateX - +character[name].split(" ")[0]) <= 25 &&
          Math.abs(props.coordinateY - +character[name].split(" ")[1]) <= 25
        ) {
          alert("You guessed right!");
        }
      }
    });
    props.setWasClicked((prevWasClicked) => !prevWasClicked);
  };

  return (
    <div className="crosshair" style={crosshairSyle}>
      <div className="square" style={centerStyle}></div>
      <div className="options">
        <button
          onClick={() => handleChoiceClick("Imposter")}
          className="option option-1"
        >
          Imposter
        </button>
        <button
          onClick={() => handleChoiceClick("Keanu")}
          className="option option-2"
        >
          Keanu
        </button>
        <button
          onClick={() => handleChoiceClick("Steve")}
          className="option option-3"
        >
          Steve
        </button>
      </div>
    </div>
  );
};

export default Crosshair;

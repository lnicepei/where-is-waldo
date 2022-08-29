import React from "react";
import "./Crosshair.css";

interface CrosshairProps {
  coordinateX: number;
  coordinateY: number;
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
    props.setWasClicked((prevWasClicked) => !prevWasClicked);
  };

  return (
    <div className="crosshair" style={crosshairSyle}>
      <div className="square" style={centerStyle}></div>
      <div className="options">
        <button
          onClick={() => handleChoiceClick("Waldo")}
          className="option option-1"
        >
          Waldo
        </button>
        <button
          onClick={() => handleChoiceClick("Snorty")}
          className="option option-2"
        >
          Snotry
        </button>
        <button
          onClick={() => handleChoiceClick("Timmy")}
          className="option option-3"
        >
          Timmy
        </button>
      </div>
    </div>
  );
};

export default Crosshair;

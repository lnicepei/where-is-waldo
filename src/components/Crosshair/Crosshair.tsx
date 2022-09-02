import React, { useContext } from "react";
import { AppContext } from "../Game/Game";
import "./Crosshair.css";

interface CrosshairProps {
  coordinateX: number;
  coordinateY: number;
  rightCoordinates: { name: string; position: string }[];
  setWasClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Crosshair = (props: CrosshairProps) => {
  const crosshairSyle = {
    left: (props.coordinateX / window.innerWidth) * 100 + "%",
    top: (props.coordinateY / window.innerHeight) * 100 + "%",
  };
  // const crosshairSyle = {
  //   left: props.coordinateX + "px",
  //   top: props.coordinateY + "px",
  // };

  // const centerStyle = {
  //   width: "50px",
  //   height: "50px",
  // };

  const { setHeroes } = useContext(AppContext);

  const handleChoiceClick = (name: string) => {
    console.log(props.coordinateX, props.coordinateY);
    props.rightCoordinates.forEach((character) => {
      if (character[name]) {
        if (
          Math.abs(props.coordinateX - +character[name].split(" ")[0]) <= 25 &&
          Math.abs(props.coordinateY - +character[name].split(" ")[1]) <= 25
        ) {
          setHeroes((prevHeroes) => {
            return prevHeroes.map((hero) => {
              if (hero.name == name) {
                hero.found = true;
              }
              return hero;
            });
          });
        }
      }
    });
    props.setWasClicked((prevWasClicked) => !prevWasClicked);
  };

  return (
    <div className="crosshair" style={crosshairSyle}>
      <div className="crosshair--center"></div>
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

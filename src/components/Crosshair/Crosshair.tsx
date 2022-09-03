import React, { useContext } from "react";
import { AppContext } from "../Game/Game";
import "./Crosshair.css";
import CrosshairButton from "./CrosshairButton/CrosshairButton";

interface CrosshairProps {
  coordinateX: number;
  coordinateY: number;
  rightCoordinates: { name: string; position: string }[];
  setWasClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Character {
  name: string;
  position: string;
}

const Crosshair = (props: CrosshairProps) => {
  const crosshairStyle = {
    left: (props.coordinateX / window.innerWidth) * 100 + "%",
    top: (props.coordinateY / window.innerHeight) * 100 + "%",
  };

  const { heroes, setHeroes } = useContext(AppContext);

  const handleChoiceClick = (name: string) => {
    props.rightCoordinates.forEach((character) => {
      if (character[name as keyof Character]) {
        if (
          Math.abs(
            (props.coordinateX / window.innerWidth) * 100 -
              +character[name as keyof Character].split(" ")[0]
          ) <= 1 &&
          Math.abs(
            (props.coordinateY / window.innerHeight) * 100 -
              +character[name as keyof Character].split(" ")[1]
          ) <= 2.5
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
    <div className="crosshair" style={crosshairStyle}>
      <div className="options">
        {heroes.map((hero) => {
          return (
            <CrosshairButton
              name={hero.name}
              found={hero.found}
              handleChoiceClick={handleChoiceClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Crosshair;

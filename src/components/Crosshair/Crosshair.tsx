import React, { useContext } from "react";
import { AppContext } from "../Game/Game";
import { StyledCrosshair, StyledOptions } from "./Crosshair.style";
import CrosshairButton from "./CrosshairButton/CrosshairButton";

interface CrosshairProps {
  coordinateX: number;
  coordinateY: number;
  setWasClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Character {
  name: string;
  position: string;
}

const Crosshair: React.FC<CrosshairProps> = (props) => {
  const { heroes, setHeroes, rightCoordinates } = useContext(AppContext);

  // if the difference between click coordinates and
  // the coordinates of characters is less than 1% Ox and 2.5% Oy
  // -> mark found character as found
  const handleChoiceClick = (name: string) => {
    rightCoordinates.forEach((character) => {
      if (character[name as keyof Character]) {
        if (
          +character[name as keyof Character].split(" ")[0] <
            (props.coordinateX / window.innerWidth) * 100 &&
          +character[name as keyof Character].split(" ")[1] <
            (props.coordinateY / window.innerHeight) * 100 &&
          +character[name as keyof Character].split(" ")[2] >
            (props.coordinateX / window.innerWidth) * 100 &&
          +character[name as keyof Character].split(" ")[3] >
            (props.coordinateY / window.innerHeight) * 100
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
    <StyledCrosshair
      coordinateX={props.coordinateX}
      coordinateY={props.coordinateY}
      windowWidth={window.innerWidth}
      windowHeight={window.innerHeight}
    >
      <StyledOptions>
        {heroes.map((hero) => {
          return (
            <CrosshairButton
              name={hero.name}
              found={hero.found}
              handleChoiceClick={handleChoiceClick}
              key={hero.name}
            />
          );
        })}
      </StyledOptions>
    </StyledCrosshair>
  );
};

export default Crosshair;

import React from "react";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

import { HeroInterface } from "../Header/Hero/Hero";
import { setHeroes } from "../Game/GameSlice";

import { StyledCrosshair, StyledOptions } from "./Crosshair.style";

import { useAppDispatch, useAppSelector } from "../../App/hooks";

import CrosshairButton from "./CrosshairButton/CrosshairButton";

interface CrosshairProps {
  crosshairCoordinateX: number;
  crosshairCoordinateY: number;
  wasClicked: boolean;
  reference: React.RefObject<HTMLImageElement>;
  setWasClicked: ActionCreatorWithoutPayload<string>;
}

export interface Character {
  id: string;
}

const Crosshair: React.FC<CrosshairProps> = (props) => {
  const dispatch = useAppDispatch();

  const heroes = useAppSelector((state) => state.heroes.value);

  const rightCoordinates = useAppSelector(
    (state) => state.currentSearchImage.rightCoordinates
  );

  // if click coordinates are within the area
  // -> mark found character as found
  const handleChoiceClick = (name: string) => {
    rightCoordinates.forEach((character: Character) => {
      if (character[name as keyof Character] && props.reference.current) {
        if (
          +character[name as keyof Character].split(" ")[0] <
            (props.crosshairCoordinateX / props.reference.current.clientWidth) *
              100 &&
          +character[name as keyof Character].split(" ")[1] <
            (props.crosshairCoordinateY /
              props.reference.current.clientHeight) *
              100 &&
          +character[name as keyof Character].split(" ")[2] >
            (props.crosshairCoordinateX / props.reference.current.clientWidth) *
              100 &&
          +character[name as keyof Character].split(" ")[3] >
            (props.crosshairCoordinateY /
              props.reference.current.clientHeight) *
              100
        ) {
          dispatch(
            setHeroes(
              heroes.map((hero: HeroInterface) => {
                if (hero.name == name) {
                  return { ...hero, found: true };
                }
                return hero;
              })
            )
          );
        }
      }
    });
    dispatch(props.setWasClicked());
  };

  return (
    <>
      {props.wasClicked && (
        <StyledCrosshair
          crosshairCoordinateX={props.crosshairCoordinateX}
          crosshairCoordinateY={props.crosshairCoordinateY}
          windowWidth={window.innerWidth}
          windowHeight={window.innerHeight}
        >
          <StyledOptions>
            {heroes.map((hero: HeroInterface) => {
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
      )}
    </>
  );
};

export default Crosshair;

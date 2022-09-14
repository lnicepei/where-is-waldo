import React from "react";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

import { HeroInterface } from "../Header/Hero/Hero";
import { setHeroes } from "../../App/AppSlice";

import { StyledCrosshair, StyledOptions } from "./Crosshair.style";

import { useAppDispatch, useAppSelector } from "../../App/hooks";

import CrosshairButton from "./CrosshairButton/CrosshairButton";

interface CrosshairProps {
  /** coordinates of cursor*/
  crosshairCoordinateX: number;
  crosshairCoordinateY: number;
  /** shows cursor every other click*/
  wasClicked: boolean;
  /** reference to search image*/
  reference: React.RefObject<HTMLImageElement>;
  /** a setter for wasClicked */
  setWasClicked: ActionCreatorWithoutPayload<string>;
}

export interface HeroCoordinates {
  /** key is 'name', value is name of character in firebase */
  [key: string]: string;
  /** coordinates are kept as a string like so '24.4, 42.3, 42.5, 52.4' */
  coordinates: string;
}

const Crosshair: React.FC<CrosshairProps> = (props) => {
  const dispatch = useAppDispatch();

  const heroes: HeroInterface[] = useAppSelector((state) => state.heroes.value);

  const rightCoordinates: HeroCoordinates[] = useAppSelector(
    (state) => state.currentSearchImage.rightCoordinates
  );

  // if click coordinates are within the area
  // -> mark found character as found
  const handleChoiceClick: (name: string) => void = (name) => {
    rightCoordinates.forEach((heroCoordinates: HeroCoordinates) => {
      if (props.reference.current && heroCoordinates[name]) {
        if (
          +heroCoordinates[name].split(" ")[0] <
            (props.crosshairCoordinateX / props.reference.current.clientWidth) *
              100 &&
          +heroCoordinates[name].split(" ")[1] <
            (props.crosshairCoordinateY /
              props.reference.current.clientHeight) *
              100 &&
          +heroCoordinates[name].split(" ")[2] >
            (props.crosshairCoordinateX / props.reference.current.clientWidth) *
              100 &&
          +heroCoordinates[name].split(" ")[3] >
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

  const optionsJSX: JSX.Element[] = heroes.map((hero: HeroInterface) => {
    return (
      <CrosshairButton
        name={hero.name}
        found={hero.found}
        handleChoiceClick={handleChoiceClick}
        key={hero.name}
      />
    );
  });

  return (
    <>
      {props.wasClicked && (
        <StyledCrosshair
          crosshairCoordinateX={props.crosshairCoordinateX} // pass the props to
          crosshairCoordinateY={props.crosshairCoordinateY} // styled components
          windowWidth={window.innerWidth}
          windowHeight={window.innerHeight}
        >
          <StyledOptions>{optionsJSX}</StyledOptions>
        </StyledCrosshair>
      )}
    </>
  );
};

export default Crosshair;

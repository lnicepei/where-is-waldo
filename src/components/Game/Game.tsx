import React from "react";

import SearchImage from "../SearchImage/SearchImage";
import Header from "../Header/Header";

import { StyledGame } from "./Game.styles";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import heroesReducer from "./GameSlice";
import SearchImageReducer from "../SearchImage/SearchImageSlice";

export interface HeroInterface {
  name: string;
  found: boolean;
  image: string;
}

const Game = () => {
  const store = configureStore({
    reducer: {
      currentSearchImage: SearchImageReducer,
      heroes: heroesReducer,
    },
  });

  console.log("game component rendered");

  return (
    <StyledGame>
      <Provider store={store}>
        <Header />
        <SearchImage />
      </Provider>
    </StyledGame>
  );
};

export default Game;

import React from "react";

import SearchImage from "../SearchImage/SearchImage";
import Header from "../Header/Header";

import { StyledGame } from "./Game.styles";

import { Provider } from "react-redux";

import store from "../store/store";

// export interface HeroInterface {
//   name: string;
//   found: boolean;
//   image: string;
// }

const Game = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <SearchImage />
      </Provider>
    </div>
  );
};

export default Game;

import React from "react";
import { Provider } from "react-redux";

import SearchImage from "../SearchImage/SearchImage";
import Header from "../Header/Header";

import { store } from "../../store";

const Game: React.FC = () => {
  return (
    <div className="Game">
      <Provider store={store}>
        <Header />
        <SearchImage />
      </Provider>
    </div>
  );
};

export default Game;

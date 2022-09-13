import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../store";
import Header from "../components/Header/Header";
import SearchImage from "../components/SearchImage/SearchImage";
import Leaderboard from "../components/Leaderboard/Leaderboard";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <SearchImage />
        <Leaderboard />
      </Provider>
    </div>
  );
}

export default App;

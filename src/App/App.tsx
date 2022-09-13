import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../store";
import Header from "../components/Header/Header";
import SearchImage from "../components/SearchImage/SearchImage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <SearchImage />
      </Provider>
    </div>
  );
}

export default App;

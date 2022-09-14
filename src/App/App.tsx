import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchImage from "../components/SearchImage/SearchImage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchImage />
      </Provider>
    </div>
  );
}

export default App;

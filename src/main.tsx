import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { GlobalStyle } from "./App/App.style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyle />
    <App />
  </>
);

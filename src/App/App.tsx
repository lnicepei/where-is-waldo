import { useState, useContext, createContext } from "react";
import "./App.css";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import Game from "../components/Game/Game";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBty4ic-Qsr_wyXC_CK2XHAnxve7jE1Ysw",
  authDomain: "where-is-waldo-bee31.firebaseapp.com",
  projectId: "where-is-waldo-bee31",
  storageBucket: "where-is-waldo-bee31.appspot.com",
  messagingSenderId: "750759008904",
  appId: "1:750759008904:web:3ddab790d89d56c29e9d3d",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;

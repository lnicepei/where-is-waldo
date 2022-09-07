import React, { useState, useEffect, createContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import SearchImage from "../SearchImage/SearchImage";
import Header from "../Header/Header";
import searchImages from "../SearchImage/SearchImages";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/app";

import { StyledGame } from "./Game.styles";
import { DocumentData } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBty4ic-Qsr_wyXC_CK2XHAnxve7jE1Ysw",
  authDomain: "where-is-waldo-bee31.firebaseapp.com",
  projectId: "where-is-waldo-bee31",
  storageBucket: "where-is-waldo-bee31.appspot.com",
  messagingSenderId: "750759008904",
  appId: "1:750759008904:web:3ddab790d89d56c29e9d3d",
};

export interface HeroInterface {
  name: string;
  found: boolean;
  image: string;
}

export interface GlobalContext {
  heroes: HeroInterface[];
  setHeroes: React.Dispatch<React.SetStateAction<HeroInterface[]>>;
  rightCoordinates?: DocumentData[];
  currentSearchImage: string;
  setCurrentSearchImage: React.Dispatch<React.SetStateAction<string>>;
  currentSearchImageURL: string;
  setCurrentSearchImageURL: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<GlobalContext>({
  heroes: [
    {
      name: "",
      found: false,
      image: "",
    },
  ],
  setHeroes: () => {},
  rightCoordinates: [{ name: "", position: "" }],
  currentSearchImage: "",
  setCurrentSearchImage: () => {},
  currentSearchImageURL: "",
  setCurrentSearchImageURL: () => {},
});

const Game = () => {
  // set the initial value of heroes array
  const [heroes, setHeroes] = useState(searchImages[0].heroes);

  const [currentSearchImage, setCurrentSearchImage] = useState(
    searchImages[0].name
  );

  const [currentSearchImageURL, setCurrentSearchImageURL] = useState("");

  // set right coordinates of searched characters
  const [rightCoordinates, setRightCoordinates] = useState<
    DocumentData[] | undefined
  >([]);

  // initialize firebase storage and get the coordinates from there
  //  by the name of the image
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(app);
  const db = firebase.firestore(app);
  const positionRef = db.collection(currentSearchImage);
  const [position] = useCollectionData(positionRef, { idField: "id" });

  useEffect(() => {
    setRightCoordinates(position);
  }, [position]);

  console.log("game component rendered");

  return (
    <StyledGame>
      <AppContext.Provider
        value={{
          heroes,
          setHeroes,
          rightCoordinates,
          currentSearchImage,
          setCurrentSearchImage,
          currentSearchImageURL,
          setCurrentSearchImageURL,
        }}
      >
        {currentSearchImageURL && <Header />}
        <SearchImage />
      </AppContext.Provider>
    </StyledGame>
  );
};

export default Game;

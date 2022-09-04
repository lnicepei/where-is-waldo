import React, { useState, useEffect, createContext } from "react";
import Crosshair from "../Crosshair/Crosshair";
import SearchImage from "../SearchImage/SearchImage";
import Header from "../Header/Header";
import firebase from "firebase/compat/app";
import { Heroes } from "../Header/Heroes";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBty4ic-Qsr_wyXC_CK2XHAnxve7jE1Ysw",
  authDomain: "where-is-waldo-bee31.firebaseapp.com",
  projectId: "where-is-waldo-bee31",
  storageBucket: "where-is-waldo-bee31.appspot.com",
  messagingSenderId: "750759008904",
  appId: "1:750759008904:web:3ddab790d89d56c29e9d3d",
};

interface HeroInterface {
  name: string;
  found: boolean;
  image: string;
}

export interface GlobalContext {
  heroes: HeroInterface[];
  wasImageChosen: boolean;
  setHeroes: React.Dispatch<React.SetStateAction<HeroInterface[]>>;
  setWasImageChosen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<GlobalContext>({
  heroes: [
    {
      name: "",
      found: false,
      image: "",
    },
  ],
  wasImageChosen: false,
  setHeroes: () => {},
  setWasImageChosen: () => {},
});

const Game = () => {
  // take all the data about heroes from Heroes file
  // TODO: import and use appropriate heroes, not just any 
  const [heroes, setHeroes] = useState(Heroes);

  // set the initial coordinates of search options container
  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);

  // if false -> hide search options container
  const [wasClicked, setWasClicked] = useState(false);

  // if false -> show search image options
  const [wasImageChosen, setWasImageChosen] = useState(false);

  // set right coordinates of searched characters
  const [rightCoordinates, setRightCoordinates] = useState<
    { name: string; position: string }[]
  >([]);

  // initialize firebase storage and get the coordinates from there
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(app);
  const db = firebase.firestore(app);
  const positionRef = db.collection("deskmat1");
  const [position] = useCollectionData(positionRef, { idField: "id" });

  // set right coordinates after each render of the page
  useEffect(() => {
    setRightCoordinates(position);
  }, [position]);

  // if all heroes were found -> restart the game
  useEffect(() => {
    if (heroes.every((hero) => hero.found == true)) {
      setHeroes((prevHeroes) =>
        prevHeroes.map((hero) => {
          return { ...hero, found: false };
        })
      );
      setWasImageChosen(false);
    }
  }, [heroes]);

  return (
    <div className="Game">
      <AppContext.Provider
        value={{ heroes, wasImageChosen, setHeroes, setWasImageChosen }}
      >
        {wasImageChosen && <Header />}
        <SearchImage
          setCoordinateX={setCoordinateX}
          setCoordinateY={setCoordinateY}
          setWasClicked={setWasClicked}
        />
        {wasClicked && (
          <Crosshair
            coordinateX={coordinateX}
            coordinateY={coordinateY}
            rightCoordinates={rightCoordinates}
            setWasClicked={setWasClicked}
          />
        )}
      </AppContext.Provider>
    </div>
  );
};

export default Game;

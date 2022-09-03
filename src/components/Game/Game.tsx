import React, { useState, useEffect, createContext } from "react";
import Crosshair from "../Crosshair/Crosshair";
import SearchImage from "../SearchImage/SearchImage";
import Header from "../Header/Header";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";
import Heroes from "../Header/Heroes";

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
  setHeroes: React.Dispatch<React.SetStateAction<HeroInterface[]>>;
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
});

const Game = () => {
  const [heroes, setHeroes] = useState(Heroes);

  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);
  const [wasClicked, setWasClicked] = useState(false);

  const [rightCoordinates, setRightCoordinates] = useState<
    { name: string; position: string }[]
  >([]);

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(app);
  const db = firebase.firestore(app);
  const positionRef = db.collection("positionOfCharacters");
  const [position] = useCollectionData(positionRef, { idField: "id" });

  useEffect(() => {
    setRightCoordinates(position);
  }, [position]);

  return (
    <div className="Game">
      <AppContext.Provider value={{ heroes, setHeroes }}>
        <Header />
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

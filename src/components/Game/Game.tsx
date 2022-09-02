import React, { useState, useEffect } from "react";
import Crosshair from "../Crosshair/Crosshair";
import SearchImage from "../SearchImage/SearchImage";
import Header from "../Header/Header";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBty4ic-Qsr_wyXC_CK2XHAnxve7jE1Ysw",
  authDomain: "where-is-waldo-bee31.firebaseapp.com",
  projectId: "where-is-waldo-bee31",
  storageBucket: "where-is-waldo-bee31.appspot.com",
  messagingSenderId: "750759008904",
  appId: "1:750759008904:web:3ddab790d89d56c29e9d3d",
};

const Game = () => {
  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);
  const [wasClicked, setWasClicked] = useState(false);

  const [rightCoordinates, setRightCoordinates] = useState<
    { name: string; position: string }[]
  >([]);
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(app);
  const db = firebase.firestore(app);
  const positionRef = db.collection("positinOfCharacters");
  const [position] = useCollectionData(positionRef, { idField: "id" });

  useEffect(() => {
    setRightCoordinates(position);
  }, [position]);

  return (
    <div className="Game">
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
          setWasClicked={setWasClicked}
          rightCoordinates={rightCoordinates}
        />
      )}
    </div>
  );
};

export default Game;

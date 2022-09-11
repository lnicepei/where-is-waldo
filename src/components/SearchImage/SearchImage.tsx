import React, { useRef, useEffect } from "react";

import Crosshair from "../Crosshair/Crosshair";

import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { HeroInterface } from "../Header/Hero/Hero";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setIsCounting, setTime } from "../../Timer/TimerSlice";

import {
  setRightCoordinates,
  setWasClicked,
  setCurrentSearchImageURL,
  setCrosshairCoordinateX,
  setCrosshairCoordinateY,
  setLeaderboardData,
} from "./SearchImageSlice";

import {
  StyledSearchContainer,
  StyledSearchImage,
  StyledSearchImageChoiceMenu,
  StyledSearchImageContainer,
} from "./SearchImage.style";

import { differenceInMilliseconds, format } from "date-fns";

const firebaseConfig = {
  apiKey: "AIzaSyBty4ic-Qsr_wyXC_CK2XHAnxve7jE1Ysw",
  authDomain: "where-is-waldo-bee31.firebaseapp.com",
  projectId: "where-is-waldo-bee31",
  storageBucket: "where-is-waldo-bee31.appspot.com",
  messagingSenderId: "750759008904",
  appId: "1:750759008904:web:3ddab790d89d56c29e9d3d",
};

const SearchImage = () => {
  const dispatch = useAppDispatch();

  const heroes = useAppSelector((state) => state.heroes.value);

  const currentSearchImage = useAppSelector(
    (state) => state.currentSearchImage.searchImage
  );

  const wasClicked = useAppSelector(
    (state) => state.currentSearchImage.wasClicked
  );

  const currentSearchImageURL = useAppSelector(
    (state) => state.currentSearchImage.currentSearchImageURL
  );

  const crosshairCoordinateX = useAppSelector(
    (state) => state.currentSearchImage.crosshairCoordinateX
  );

  const crosshairCoordinateY = useAppSelector(
    (state) => state.currentSearchImage.crosshairCoordinateY
  );

  const time = useAppSelector((state) => state.time.time);

  const imageRef = useRef<HTMLImageElement>(null);

  const app = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(app);
  const positionRef = db.collection(currentSearchImage);
  const timeRef = db.collection("results").orderBy("desc");

  // const q = query(timeRef, orderBy("time", "asc"), limit(10));
  // console.log(q);

  useEffect(() => {
    (async () => {
      try {
        const positionData = await getDocs(positionRef);
        dispatch(
          setRightCoordinates(
            positionData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        );
        const leaderboardData = await getDocs(
          collection(timeRef, `${currentSearchImage}/players`)
        );
        dispatch(
          setLeaderboardData(
            leaderboardData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [positionRef, timeRef]);

  // sets the coordinates of crosshair to clicked position
  // and hides it after the following click
  const setCrosshairCoordinates = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (imageRef.current == e.target) {
      dispatch(setCrosshairCoordinateX(e.pageX));
      dispatch(setCrosshairCoordinateY(e.pageY));
      dispatch(setWasClicked());
    }
  };

  // if all heroes were found -> reset current image url and disable counting
  useEffect(() => {
    if (heroes.every((hero: HeroInterface) => hero.found == true)) {
      const addDataToDatabase = async () => {
        try {
          await addDoc(
            collection(timeRef, `${currentSearchImage}/${"players"}`),
            {
              time: differenceInMilliseconds(new Date(), time),
              name: prompt("Enter your name"),
            }
          );
        } catch (err) {
          console.log(err);
        }
      };

      addDataToDatabase();
      //TODO: write info to database
      // https://www.youtube.com/watch?v=jCY6DH8F4oc
      dispatch(setCurrentSearchImageURL(""));
      dispatch(setIsCounting(false));
    }
  }, [heroes]);

  return (
    <StyledSearchImageContainer>
      {currentSearchImageURL ? (
        <StyledSearchContainer onClick={(e) => setCrosshairCoordinates(e)}>
          <StyledSearchImage
            src={currentSearchImageURL}
            alt="Search Image"
            ref={imageRef}
          />
        </StyledSearchContainer>
      ) : (
        <StyledSearchImageChoiceMenu />
      )}
      <Crosshair
        crosshairCoordinateX={crosshairCoordinateX}
        crosshairCoordinateY={crosshairCoordinateY}
        wasClicked={wasClicked}
        setWasClicked={setWasClicked}
        reference={imageRef}
      />
    </StyledSearchImageContainer>
  );
};

export default SearchImage;

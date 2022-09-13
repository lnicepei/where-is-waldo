import React, { useRef, useEffect } from "react";

import Crosshair from "../Crosshair/Crosshair";

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { HeroInterface } from "../Header/Hero/Hero";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setIsCounting } from "../Timer/TimerSlice";

import {
  setRightCoordinates,
  setCurrentSearchImageURL,
} from "./SearchImageSlice";

import {
  StyledSearchContainer,
  StyledSearchImage,
  StyledSearchImageChoiceMenu,
  StyledSearchImageContainer,
} from "./SearchImage.style";

import { differenceInMilliseconds } from "date-fns";
import {
  setAllLeaderboardData,
  setCurrentLeaderboardData,
} from "../Leaderboard/LeaderboardSlice";
import {
  setCrosshairCoordinateX,
  setCrosshairCoordinateY,
  setWasClicked,
} from "../Crosshair/CrosshairSlice";
import searchImages from "./SearchImages";

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

  const isCounting = useAppSelector((state) => state.time.isCounting);

  const heroes = useAppSelector((state) => state.heroes.value);
  
  const time = useAppSelector((state) => {
    if (!state.time.isCounting) {
      return state.time.time;
    }
    return 0;
  });

  const currentSearchImage = useAppSelector(
    (state) => state.currentSearchImage.searchImage
  );

  const wasClicked = useAppSelector((state) => state.crosshair.wasClicked);

  const currentSearchImageURL = useAppSelector(
    (state) => state.currentSearchImage.currentSearchImageURL
  );

  const crosshairCoordinateX = useAppSelector(
    (state) => state.crosshair.crosshairCoordinateX
  );

  const crosshairCoordinateY = useAppSelector(
    (state) => state.crosshair.crosshairCoordinateY
  );

  const allLeaderboardData = useAppSelector(
    (state) => state.leaderboard.allLeaderboardData
  );
  console.log(allLeaderboardData);

  const imageRef = useRef<HTMLImageElement>(null);

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  const positionRef = collection(db, currentSearchImage);
  const timeRef = db.collection("results");

  useEffect(() => {
    (async () => {
      try {
        const positionData = await getDocs(positionRef);
        dispatch(
          setRightCoordinates(
            positionData.docs.map((doc) => ({
              ...doc.data(),
              coordinates: doc.id,
            }))
          )
        );

        // searchImages.forEach(async (image) => {
        //   const currentPlayersResults = collection(
        //     db,
        //     `results/${image.name}/players`
        //   );

        //   const currentResultsQuery = query(
        //     currentPlayersResults,
        //     orderBy("time")
        //   );

        //   const currentLeaderboardData = await getDocs(currentResultsQuery);

        //   setAllLeaderboardData(currentLeaderboardData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        // });

        // console.log(allLeaderboardData);

        // if (allLeaderboardData.length)
        //   dispatch(setCurrentLeaderboardData(allLeaderboardData));

        // const playersResults = collection(
        //   db,
        //   `results/${currentSearchImage}/players`
        // );

        // // order results
        // const resultsQuery = query(playersResults, orderBy("time"));

        // // async get data:
        // const leaderboardData = await getDocs(resultsQuery);

        // dispatch(
        //   setCurrentLeaderboardData(
        //     leaderboardData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        //   )
        // );

        const wiiPlayersResults = collection(db, `results/wii/players`);

        // order results
        const wiiResultsQuery = query(wiiPlayersResults, orderBy("time"));

        // async get data:
        const wiiLeaderboardData = await getDocs(wiiResultsQuery);

        const wiiDataArray = wiiLeaderboardData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const snesPlayersResults = collection(db, `results/snes/players`);

        // order results
        const snesResultsQuery = query(snesPlayersResults, orderBy("time"));

        // async get data:
        const snesLeaderboardData = await getDocs(snesResultsQuery);

        const snesDataArray = snesLeaderboardData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const ps2PlayersResults = collection(db, `results/ps2/players`);

        // order results
        const ps2ResultsQuery = query(ps2PlayersResults, orderBy("time"));

        // async get data:
        const ps2LeaderboardData = await getDocs(ps2ResultsQuery);

        const ps2DataArray = ps2LeaderboardData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        console.log(ps2DataArray);

        dispatch(
          setAllLeaderboardData([ps2DataArray, snesDataArray, wiiDataArray])
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentSearchImage]);

  useEffect(() => {
    // console.log(currentSearchImage);
    setCurrentLeaderboardData(allLeaderboardData[0]);
    const index = searchImages.findIndex(
      (image) => image.name == currentSearchImage
    );

    dispatch(setCurrentLeaderboardData(allLeaderboardData[index]));
  });

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
    try {
      if (heroes.every((hero: HeroInterface) => hero.found == true)) {
        const addDataToDatabase = async () => {
          try {
            await addDoc(collection(timeRef, `${currentSearchImage}/players`), {
              time: differenceInMilliseconds(new Date(), new Date(time)),
              name: prompt("Enter your name"),
            });
          } catch (err) {
            console.log(err);
          }
        };

        addDataToDatabase();
        dispatch(setCurrentSearchImageURL(""));
        dispatch(setIsCounting(false));
      }
    } catch (error) {
      console.log(error);
    }
  }, [heroes]);

  return (
    <StyledSearchImageContainer>
      {currentSearchImageURL && isCounting ? (
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

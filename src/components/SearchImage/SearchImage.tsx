import React, { useRef, useEffect } from "react";

import "firebase/compat/firestore";
import { addDoc, collection, getDocs } from "firebase/firestore";

import { HeroInterface } from "../Header/Hero/Hero";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import {
  setRightCoordinates,
  setCurrentSearchImageURL,
} from "./SearchImageSlice";

import {
  setCrosshairCoordinateX,
  setCrosshairCoordinateY,
  setWasClicked,
} from "../Crosshair/CrosshairSlice";

import { setHeroes } from "../../App/AppSlice";
import { setCurrentLeaderboardData } from "../Leaderboard/LeaderboardSlice";

import searchImages from "./SearchImages";

import {
  StyledSearchImage,
  StyledSearchImageContainer,
} from "./SearchImage.style";

import { differenceInMilliseconds } from "date-fns";

import Timer from "../Timer/Timer";
import Header from "../Header/Header";
import Crosshair from "../Crosshair/Crosshair";
import { setIsCounting } from "../Timer/TimerSlice";
import Leaderboard, { User } from "../Leaderboard/Leaderboard";
import Menu from "./SearchImageChoiceMenu/SearchImageChoiceMenu";

import { db, timeRef } from "../../store/config";

const SearchImage = () => {
  const dispatch = useAppDispatch();
  
  const isCounting: boolean = useAppSelector((state) => state.time.isCounting);

  const heroes: HeroInterface[] = useAppSelector((state) => state.heroes.value);

  const time: string | 0 = useAppSelector((state) => {
    if (heroes.every((hero: HeroInterface) => hero.found == true)) {
      return state.time.time;
    }
    return 0;
  });

  const currentSearchImage: string | 0 = useAppSelector(
    (state) => state.currentSearchImage.searchImage
  );

  const wasClicked: boolean = useAppSelector(
    (state) => state.crosshair.wasClicked
  );

  const currentSearchImageURL: string = useAppSelector(
    (state) => state.currentSearchImage.currentSearchImageURL
  );

  const crosshairCoordinateX: number = useAppSelector(
    (state) => state.crosshair.crosshairCoordinateX
  );

  const crosshairCoordinateY: number = useAppSelector(
    (state) => state.crosshair.crosshairCoordinateY
  );

  const allLeaderboardData: User[][] = useAppSelector(
    (state) => state.leaderboard.allLeaderboardData
  );

  const positionRef = collection(db, currentSearchImage.toLowerCase());

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const positionData = await getDocs(positionRef);

        const positionDataArray = positionData.docs.map((doc) => ({
          ...doc.data(),
          coordinates: doc.id,
        }));
        dispatch(setRightCoordinates(positionDataArray));
        // }
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSearchImage, isCounting]);

  useEffect(() => {
    const index: number = searchImages.findIndex(
      (image) => image.name == currentSearchImage
    );

    dispatch(setCurrentLeaderboardData(allLeaderboardData[index]));
    dispatch(setCurrentSearchImageURL(searchImages[index].url));
  });

  // set the coordinates of crosshair to clicked position
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
      if (heroes.every((hero: HeroInterface) => hero.found)) {
        dispatch(
          setHeroes(
            heroes.map((hero) => {
              return { ...hero, found: false };
            })
          )
        );

        const timeDifference = differenceInMilliseconds(
          new Date(),
          new Date(time)
        );

        let name = prompt("Enter your name");
        if (name) {
          if (name?.length > 50) name = name?.slice(0, 50);
        } else {
          name = "Unnamed";
        }

        (async () => {
          try {
            await addDoc(
              collection(
                timeRef,
                `${currentSearchImage.toLowerCase()}/players`
              ),
              {
                time: timeDifference,
                name: name,
              }
            );
          } catch (err) {
            console.log(err);
          }
        })();

        dispatch(setCurrentSearchImageURL(""));
        dispatch(setIsCounting(false));
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroes]);

  return (
    <StyledSearchImageContainer>
      <Header />
      
      {isCounting && <Timer />}

      {currentSearchImageURL && isCounting ? (
        <StyledSearchImage
          src={currentSearchImageURL}
          alt="Search Image"
          ref={imageRef}
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            setCrosshairCoordinates(e)
          }
        />
      ) : (
        <Menu />
      )}

      {!isCounting && <Leaderboard />}

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

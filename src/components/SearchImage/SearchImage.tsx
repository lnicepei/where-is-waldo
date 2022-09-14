import React, { useRef, useEffect } from "react";

import Crosshair from "../Crosshair/Crosshair";

import { addDoc, collection, getDocs } from "firebase/firestore";

import "firebase/compat/firestore";

import { HeroInterface } from "../Header/Hero/Hero";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setIsCounting } from "../Timer/TimerSlice";

import {
  setRightCoordinates,
  setCurrentSearchImageURL,
} from "./SearchImageSlice";

import { setCurrentLeaderboardData } from "../Leaderboard/LeaderboardSlice";

import {
  setCrosshairCoordinateX,
  setCrosshairCoordinateY,
  setWasClicked,
} from "../Crosshair/CrosshairSlice";

import searchImages from "./SearchImages";

import {
  StyledSearchContainer,
  StyledSearchImage,
  StyledSearchImageContainer,
} from "./SearchImage.style";

import { differenceInMilliseconds } from "date-fns";
import Header from "../Header/Header";
import { setHeroes } from "../../App/AppSlice";
import Leaderboard, { User } from "../Leaderboard/Leaderboard";

import { db, timeRef } from "../../store/config";
import Menu from "./SearchImageChoiceMenu/SearchImageChoiceMenu";

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

  const positionRef = collection(db, currentSearchImage);

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const positionData = await getDocs(positionRef);

        const positionDataArray = positionData.docs.map((doc) => ({
          ...doc.data(),
          coordinates: doc.id,
        }));
        console.log("coordinates have been set");
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

        let name = prompt("Enter your name");
        if (name) name = name.length < 50 && name.length > 0 ? name : "Unnamed";

        (async () => {
          try {
            await addDoc(collection(timeRef, `${currentSearchImage}/players`), {
              time: differenceInMilliseconds(new Date(), new Date(time)),
              name: name,
            });
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

      {currentSearchImageURL && isCounting ? (
        <StyledSearchContainer>
          <StyledSearchImage
            src={currentSearchImageURL}
            alt="Search Image"
            ref={imageRef}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              setCrosshairCoordinates(e)
            }
          />
        </StyledSearchContainer>
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

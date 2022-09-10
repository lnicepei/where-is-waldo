import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeroInterface } from "../Header/Hero/Hero";
import searchImages from "./SearchImages";
import { User } from "../Leaderboard/Leaderboard";

interface InitialState {
  value: HeroInterface[];
  wasClicked: boolean;
  searchImage: string;
  currentSearchImageURL: string;
  rightCoordinates: User[];
  crosshairCoordinateX: number;
  crosshairCoordinateY: number;
  leaderboardData: User[];
}

const initialState: InitialState = {
  value: [],
  wasClicked: false,
  searchImage: searchImages[0].name,
  currentSearchImageURL: "",
  rightCoordinates: [],
  crosshairCoordinateX: 0,
  crosshairCoordinateY: 0,
  leaderboardData: [],
};

export const SearchImageSlice = createSlice({
  name: "searchImage",
  initialState,
  reducers: {
    setWasClicked: (state) => {
      state.wasClicked = !state.wasClicked;
    },

    setCurrentSearchImage: (state, action: PayloadAction<string>) => {
      state.searchImage = action.payload;
    },

    setRightCoordinates: (state, action: PayloadAction<User[]>) => {
      state.rightCoordinates = action.payload;
    },

    setCurrentSearchImageURL: (state, action: PayloadAction<string>) => {
      state.currentSearchImageURL = action.payload;
    },

    setCrosshairCoordinateX: (state, action: PayloadAction<number>) => {
      state.crosshairCoordinateX = action.payload;
    },

    setCrosshairCoordinateY: (state, action: PayloadAction<number>) => {
      state.crosshairCoordinateY = action.payload;
    },

    setLeaderboardData: (state, action: PayloadAction<User[]>) => {
      state.leaderboardData = action.payload;
    },
  },
});

export const {
  setWasClicked,
  setCurrentSearchImage,
  setRightCoordinates,
  setCurrentSearchImageURL,
  setCrosshairCoordinateX,
  setCrosshairCoordinateY,
  setLeaderboardData
} = SearchImageSlice.actions;

export default SearchImageSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeroInterface } from "../Header/Hero/Hero";
import searchImages from "./SearchImages";
import { Character } from "../Crosshair/Crosshair";

interface InitialState {
  value: HeroInterface[];
  wasClicked: boolean;
  searchImage: string;
  currentSearchImageURL: string;
  rightCoordinates: [];
  crosshairCoordinateX: number;
  crosshairCoordinateY: number;
}

const initialState: InitialState = {
  value: [],
  wasClicked: false,
  searchImage: searchImages[0].name,
  currentSearchImageURL: "",
  rightCoordinates: [],
  crosshairCoordinateX: 0,
  crosshairCoordinateY: 0,
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

    setRightCoordinates: (state, action: PayloadAction<[]>) => {
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
  },
});

export const {
  setWasClicked,
  setCurrentSearchImage,
  setRightCoordinates,
  setCurrentSearchImageURL,
  setCrosshairCoordinateX,
  setCrosshairCoordinateY,
} = SearchImageSlice.actions;

export default SearchImageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import searchImages from "./SearchImages";

const initialState = {
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

    setCurrentSearchImage: (state, action) => {
      state.searchImage = action.payload;
    },

    setRightCoordinates: (state, action) => {
      state.rightCoordinates = action.payload;
    },

    setCurrentSearchImageURL: (state, action) => {
      state.currentSearchImageURL = action.payload;
    },

    setCrosshairCoordinateX: (state, action) => {
      state.crosshairCoordinateX = action.payload;
    },

    setCrosshairCoordinateY: (state, action) => {
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

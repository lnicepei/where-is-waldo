import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import searchImages from "./SearchImages";
import { HeroCoordinates } from "../Crosshair/Crosshair";

interface InitialState {
  searchImage: string;
  currentSearchImageURL: string;
  rightCoordinates: HeroCoordinates[];
}

const initialState: InitialState = {
  searchImage: searchImages[0].name,
  currentSearchImageURL: "",
  rightCoordinates: [],
};

export const SearchImageSlice = createSlice({
  name: "searchImage",
  initialState,
  reducers: {
    setCurrentSearchImage: (state, action: PayloadAction<string>) => {
      state.searchImage = action.payload;
    },

    setRightCoordinates: (state, action: PayloadAction<HeroCoordinates[]>) => {
      state.rightCoordinates = action.payload;
    },

    setCurrentSearchImageURL: (state, action: PayloadAction<string>) => {
      state.currentSearchImageURL = action.payload;
    },
  },
});

export const {
  setCurrentSearchImage,
  setRightCoordinates,
  setCurrentSearchImageURL,
} = SearchImageSlice.actions;

export default SearchImageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import searchImages from "./SearchImages";

const initialState = { value: false, searchImage: searchImages[0].name };

export const searchImageSlice = createSlice({
  name: "searchImage",
  initialState,
  reducers: {
    click: (state) => {
      state.value = !state.value;
    },

    setCurrentSearchImage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { click, setCurrentSearchImage } = searchImageSlice.actions;

export default searchImageSlice.reducer;

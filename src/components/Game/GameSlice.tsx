import { createSlice } from "@reduxjs/toolkit";
import searchImages from "../SearchImage/SearchImages";

export const stateSlice = createSlice({
  name: "heroes",
  initialState: {
    value: searchImages[0].heroes,
  },
  reducers: {
    setHeroes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHeroes } = stateSlice.actions;

export default stateSlice.reducer;

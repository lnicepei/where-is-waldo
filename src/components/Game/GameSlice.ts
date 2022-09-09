import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import searchImages from "../SearchImage/SearchImages";
import { HeroInterface } from "../Header/Hero/Hero";

interface InitialState {
  value: HeroInterface[];
}

const initialState: InitialState = {
  value: searchImages[0].heroes,
};

export const stateSlice = createSlice({
  name: "heroes",
  initialState: initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<HeroInterface[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setHeroes } = stateSlice.actions;

export default stateSlice.reducer;

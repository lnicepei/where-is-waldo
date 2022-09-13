import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import searchImages from "../components/SearchImage/SearchImages";
import { HeroInterface } from "../components/Header/Hero/Hero";

interface InitialState {
  value: HeroInterface[];
}

const initialState: InitialState = {
  value: searchImages[0].heroes,
};

export const heroesReducer = createSlice({
  name: "heroes",
  initialState: initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<HeroInterface[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setHeroes } = heroesReducer.actions;

export default heroesReducer.reducer;

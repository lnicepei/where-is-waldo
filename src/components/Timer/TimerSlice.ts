import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { parseISO } from "date-fns";

interface InitialState {
  time: string;
  isCounting: boolean;
  resultTime: number;
}

const initialState: InitialState = {
  time: new Date().toISOString(),
  isCounting: false,
  resultTime: 0,
};

export const heroesReducer = createSlice({
  name: "time",
  initialState: initialState,
  reducers: {
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },

    setIsCounting: (state, action: PayloadAction<boolean>) => {
      state.isCounting = action.payload;
    },
  },
});

export const { setIsCounting, setTime } = heroesReducer.actions;

export default heroesReducer.reducer;

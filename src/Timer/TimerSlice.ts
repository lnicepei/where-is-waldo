import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  time: number;
  isCounting: boolean;
  resultTime: number;
}

const initialState: InitialState = {
  time: 0,
  isCounting: false,
  resultTime: 0,
};

export const heroesReducer = createSlice({
  name: "time",
  initialState: initialState,
  reducers: {
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },

    setIsCounting: (state, action: PayloadAction<boolean>) => {
      state.isCounting = action.payload;
    },

    setResultTime: (state, action: PayloadAction<number>) => {
      state.resultTime = action.payload;
    },
  },
});

export const { setTime, setIsCounting, setResultTime } = heroesReducer.actions;

export default heroesReducer.reducer;

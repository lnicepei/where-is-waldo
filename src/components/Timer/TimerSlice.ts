import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const timerReducer = createSlice({
  name: "timer",
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

export const { setIsCounting, setTime } = timerReducer.actions;

export default timerReducer.reducer;

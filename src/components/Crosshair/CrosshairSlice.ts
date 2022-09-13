import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  wasClicked: boolean;
  crosshairCoordinateX: number;
  crosshairCoordinateY: number;
}

const initialState: InitialState = {
  wasClicked: false,
  crosshairCoordinateX: 0,
  crosshairCoordinateY: 0,
};

export const crosshairReducer = createSlice({
  name: "crosshair",
  initialState: initialState,
  reducers: {
    setWasClicked: (state) => {
      state.wasClicked = !state.wasClicked;
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
  setCrosshairCoordinateX,
  setCrosshairCoordinateY,
} = crosshairReducer.actions;

export default crosshairReducer.reducer;

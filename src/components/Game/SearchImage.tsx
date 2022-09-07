import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "heroes",
  initialState: {
    value: { name: "", found: false, image: "" },
  },
  reducers: {
    getHeroes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getHeroes } = stateSlice.actions;

export default stateSlice.reducer;

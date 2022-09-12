import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./Leaderboard";

interface InitialState {
  leaderboardData: User[];
}

const initialState: InitialState = {
  leaderboardData: [],
};

export const leaderboardReducer = createSlice({
  name: "leaderboard",
  initialState: initialState,
  reducers: {
    setLeaderboardData: (state, action: PayloadAction<User[]>) => {
      state.leaderboardData = action.payload;
    },
  },
});

export const { setLeaderboardData } = leaderboardReducer.actions;

export default leaderboardReducer.reducer;

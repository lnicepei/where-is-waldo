import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./Leaderboard";

interface InitialState {
  currentLeaderboardData: User[];
  allLeaderboardData: User[][];
}

const initialState: InitialState = {
  currentLeaderboardData: [],
  allLeaderboardData: [[]],
};

export const leaderboardReducer = createSlice({
  name: "leaderboard",
  initialState: initialState,
  reducers: {
    setCurrentLeaderboardData: (state, action: PayloadAction<User[]>) => {
      state.currentLeaderboardData = action.payload;
    },

    setAllLeaderboardData: (state, action: PayloadAction<User[][]>) => {
      state.allLeaderboardData = action.payload;
    },
  },
});

export const { setCurrentLeaderboardData, setAllLeaderboardData } =
  leaderboardReducer.actions;

export default leaderboardReducer.reducer;

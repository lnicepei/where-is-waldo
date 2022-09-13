import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "../App/AppSlice";
import timeReducer from "../components/Timer/TimerSlice";
import searchImageReducer from "../components/SearchImage/SearchImageSlice";
import leaderboardReducer from "../components/Leaderboard/LeaderboardSlice";
import crosshairReducer from "../components/Crosshair/CrosshairSlice";

export const store = configureStore({
  reducer: {
    currentSearchImage: searchImageReducer,
    heroes: heroesReducer,
    time: timeReducer,
    leaderboard: leaderboardReducer,
    crosshair: crosshairReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

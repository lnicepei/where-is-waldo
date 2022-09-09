import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "../components/Game/GameSlice";
import timeReducer from "../Timer/TimerSlice";
import searchImageReducer from "../components/SearchImage/SearchImageSlice";

export const store = configureStore({
  reducer: {
    currentSearchImage: searchImageReducer,
    heroes: heroesReducer,
    time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

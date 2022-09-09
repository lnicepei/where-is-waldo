import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "../components/Game/GameSlice"
import searchImageReducer from "../components/SearchImage/SearchImageSlice"

export const store = configureStore({
  reducer: {
    currentSearchImage: searchImageReducer,
    heroes: heroesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";

import heroesReducer from "../SearchImage/SearchImageSlice";
import currentSearchImageReducer from "../SearchImage/SearchImageSlice";

const store = configureStore({
  reducer: {
    currentSearchImage: currentSearchImageReducer,
    heroes: heroesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

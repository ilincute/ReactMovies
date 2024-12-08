import { configureStore } from "@reduxjs/toolkit";
// import movieReducer from "./movie/movieReducer";
import userReducer from "./user/userReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    // movie: movieReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies";

const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});

export default store;

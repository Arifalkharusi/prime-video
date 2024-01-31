import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: {},
    search: "",
    fav: [],
  },
  reducers: {
    movieHandler: (state, action) => {
      state.data = action.payload;
    },
    searchHandler: (state, action) => {
      state.search = action.payload;
    },
    favHandler: (state, action) => {
      const localFav = JSON.parse(localStorage.getItem("fav"));
      if (localFav) state.fav = localFav;
    },
  },
});

export const { movieHandler, searchHandler, favHandler } = movieSlice.actions;
export default movieSlice.reducer;

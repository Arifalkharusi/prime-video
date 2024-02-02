import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: {},
    search: "",
    fav: [],
    info: {
      season: 1,
      episode: 1,
    },
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
    updateHandler: (state, action) => {
      state.info = action.payload;

      if (state.data.media_type !== "tv") return;

      const fav = JSON.parse(localStorage.getItem("fav"));
      let arr = [...fav];
      const index = arr.findIndex((x) => x.id === state.data.id);

      if (index >= 0) {
        arr[index].progress = [state.info.season, state.info.episode];
        localStorage.setItem("fav", JSON.stringify(arr));
      }
    },
  },
});

export const {
  movieHandler,
  searchHandler,
  favHandler,

  updateHandler,
} = movieSlice.actions;
export default movieSlice.reducer;

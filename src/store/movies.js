import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=abc2763a0c32e1349d709408b65f5222";
const POPULAR_MOVIES = `${BASE_URL}discover/movie?sort_by=popularity.desc&${API_KEY}`;

export const getData = createAsyncThunk("post/getData", async ({ page }) => {
  return fetch(`${POPULAR_MOVIES}&page=${page}`).then((res) => res.json());
});

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    data: [],
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, actions) => {
      state.data = actions.payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { showData } = movieSlice.actions;
export default movieSlice.reducer;

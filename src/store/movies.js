import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: {},
  },
  reducers: {
    movieHandler: (state, action) => {
      state.data = action.payload;
      console.log(state.data);
    },
  },
});

export const { movieHandler } = movieSlice.actions;
export default movieSlice.reducer;

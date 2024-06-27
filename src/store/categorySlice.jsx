import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    video: [],
    category: "all",
  },
  reducers: {
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setHomeVideo, setCategory } = categorySlice.actions;

export default categorySlice.reducer;

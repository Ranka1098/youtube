import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    video: [],
    category: "all",
    commentData: [],
  },
  reducers: {
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setComment: (state, action) => {
      state.commentData = action.payload;
    },
  },
});

export const { setHomeVideo, setCategory, setComment } = categorySlice.actions;

export default categorySlice.reducer;

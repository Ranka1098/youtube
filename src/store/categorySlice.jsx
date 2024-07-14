import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    video: [],
    category: "all",
    commentData: [],
    searchResult: [],
    InputSearchtext: "",
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
    setSearchResults: (state, action) => {
      state.searchResult = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResult = [];
    },
    setInputSeachtext: (state, action) => {
      state.InputSearchtext = action.payload;
    },
  },
});

export const {
  setHomeVideo,
  setCategory,
  setComment,
  setSearchResults,
  clearSearchResults,
  setInputSeachtext,
} = categorySlice.actions;

export default categorySlice.reducer;

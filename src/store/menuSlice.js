import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    toggleMenu: true,
  },
  reducers: {
    isMenuToggle: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
  },
});

export const { isMenuToggle } = menuSlice.actions;
export default menuSlice.reducer;

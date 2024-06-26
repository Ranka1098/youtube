import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    search: searchSlice,
  },
});
export default store;

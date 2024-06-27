import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import searchSlice from "./searchSlice";
import categorySlice from "./categorySlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    search: searchSlice,
    category: categorySlice,
  },
});
export default store;

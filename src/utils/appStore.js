import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configure our store with it's slices
const appStore = configureStore({
  // one main reducer Object which contain all the slice's reducers functions
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

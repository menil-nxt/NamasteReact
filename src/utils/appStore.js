import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configure our store with it's slices 
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

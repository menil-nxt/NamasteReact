import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // name of slice
  initialState: {
    // initialState has object items -> items is initial empty array []
    items: [],
  },
  reducers: {
    // reducers is contains multiples reducer functions
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    // example => originalState = {items:[ "pizza"]}
    clearCart: (state) => {
      return { items: [] }; // this will replace the originalState with new state value.
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // name of slice
  initialState: {
    // initialState has object items -> items is initial empty array []
    items: ["pizza", "Burger", "pasta", "Gola", "chai"],
  },
  reducers: {
    addItems: (state, action) => {
      // Mutating state here
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

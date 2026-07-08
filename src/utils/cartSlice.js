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
      // state = {items:[ "pizza"]} here state is local variable.
      console.log(state); // it will return proxyObject basically it will return proxyObject of originalState in redux formate so we can not read it.
      // but for read into redux we have to pass it inside current(state) function this way you can read the state data
      console.log(current(state));
      state = []; // it will only change the local variable value as empty array but originalState will remain as it is.
      state.items.length = 0; // throught this we can replace originalState value with new state value.
      // one another way to do this is
      return { items: [] }; // this will replace the originalState with new state value.
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item, i) => i != action.payload);
    },

    increment: (state, action) => {
      state.items[action.payload].quantity += 1;
    },

    decrement: (state, action) => {
      state.items[action.payload].quantity = Math.max(
        1,
        state.items[action.payload].quantity - 1
      );
    },
  },
});

export const { addItem, removeItem, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage if exists
const initialState = {
  cartitems: JSON.parse(localStorage.getItem("cartState")) || []
};

// Save to localStorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("cartState", JSON.stringify(state.cartitems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const item = state.cartitems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartitems.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state);
    },

    deleteFromCart: (state, action) => {
      state.cartitems = state.cartitems.filter(
        (item) => item.id !== action.payload.id
      );
      saveToLocalStorage(state);
    },

    incrementQty: (state, action) => {
      const item = state.cartitems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        saveToLocalStorage(state);
      }
    },

    decrementQty: (state, action) => {
      const item = state.cartitems.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveToLocalStorage(state);
      }
    }
  }
});

export const { addTocart, deleteFromCart, incrementQty, decrementQty } = cartSlice.actions;

export default cartSlice.reducer;

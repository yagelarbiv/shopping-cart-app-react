import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("cart")) || [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    getFromLocalStorage(state) {
      return localStorage.getItem("cart", JSON.stringify(state))
    },
    setLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state))
    },
    clearLocalStorage() {
      localStorage.clear();
    }
  },
});

export const { addToCart, removeFromCart, setLocalStorage, clearLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;

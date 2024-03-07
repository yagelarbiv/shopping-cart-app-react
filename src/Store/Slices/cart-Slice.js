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
    getFromLocalStorage(state, action) {
      return localStorage.getItem("cart", JSON.stringify(state))
    },
    setLocalStorage(state, action) {
      localStorage.setItem("cart", JSON.stringify(state))
    }
  },
});

export const { addToCart, removeFromCart,setLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;

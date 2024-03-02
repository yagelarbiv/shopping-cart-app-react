import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Slices/cart-Slice';

const store = configureStore({
  reducer:{
    Cart: cartReducer,
  }
})

export default store;
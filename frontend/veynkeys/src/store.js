import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Slices/productsSlice';
import usersReducer from './Slices/usersSlice';
import cartReducer from './Slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        users: usersReducer,
        cart: cartReducer,
       
    },
});
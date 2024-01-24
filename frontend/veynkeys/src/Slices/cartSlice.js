import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice
    (
        {
            name: 'cart',
            initialState: {
                items: {},
            },
            reducers: {
                addToCart: (state, action) => {
                    const product = action.payload;
                    if (state.items[product.id]) {
                        state.items[product.id].quantity += 1;
                    } else {
                        state.items[product.id] = { ...product, quantity: 1 };
                    }
                },
                removeFromCart: (state, action) => {
                    delete state.items[action.payload]; // Ürünü sepetten çıkarır
                },
                updateCartQuantity: (state, action) => {
                    const { productId, newQuantity } = action.payload;
                    if (state.items[productId]) {
                        state.items[productId].quantity = newQuantity; // Ürün miktarını günceller
                    }
                }
            }
        });

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;

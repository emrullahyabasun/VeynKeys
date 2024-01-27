import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addToCart = createAsyncThunk('cart/addToCart', async ({ productId, quantity }, { getState }) => {
    const state = getState();
    if (!state.users.user || !state.users.user.id) {
        throw new Error("Kullanıcı girişi yapılmamış.");
    }
    const userId = state.users.user.id;
    const token = localStorage.getItem('token'); // Token'ı localStorage'dan alın
    const response = await axios.post(`https://localhost:7297/api/Cart/AddToCart`, {
        userId,
        productId,
        quantity
    }, {
        headers: {
            Authorization: `Bearer ${token}` 
        }


    });
    return response.data;  
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId, { getState }) => {
    const userId = getState().users.user.id;
    const response = await axios.delete(`https://localhost:7297/api/Cart/RemoveFromCart?userId=${userId}&productId=${productId}`);
    return productId;  
});

export const updateCartQuantity = createAsyncThunk('cart/updateCartQuantity', async ({ productId, newQuantity }, { getState }) => {
    const userId = getState().users.user.id;
    const response = await axios.post(`https://localhost:7297/api/Cart/UpdateQuantity`, {
        userId,
        productId,
        quantity: newQuantity
    });
    return { productId, quantity: newQuantity };  
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],  // Sepetteki ürünler
        loading: false,
        error: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                // Ürün zaten sepetteyse miktarını güncelle, değilse yeni ürünü ekle
                const existingItem = state.items.find(item => item.id === action.payload.id);
                if (existingItem) {
                    existingItem.quantity += action.payload.quantity;
                } else {
                    state.items.push({ ...action.payload, quantity: action.payload.quantity });
                }
                state.loading = false;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload);
                if (index !== -1) {
                    state.items.splice(index, 1);
                }
            })
            .addCase(updateCartQuantity.fulfilled, (state, action) => {
                const { productId, quantity } = action.payload;
                const existingItem = state.items.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity = quantity;
                }
            });
        // Diğer case'leriniz bu blok içerisine eklenebilir.
    }
});

export default cartSlice.reducer;

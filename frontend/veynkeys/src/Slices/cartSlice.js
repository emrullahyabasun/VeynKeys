import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addToCart = createAsyncThunk('cart/addToCart', async ({ userId, productId, quantity }) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/cart/AddToCart`, {
        userId,
        productId,
        quantity 
    });
    return response.data;  // Burada sepete eklenen ürünün verisini dönebilirsiniz
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId, { getState }) => {
    const userId = getState().user.id; // Varsayılan kullanıcı ID'nizi state'den alın
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/cart/RemoveFromCart?userId=${userId}&productId=${productId}`);
    return productId;  // Sadece productId'yi döndürün, çünkü bu reducer tarafından kullanılacak
});

export const updateCartQuantity = createAsyncThunk('cart/updateCartQuantity', async ({ productId, newQuantity }, { getState }) => {
    const userId = getState().user.id; // Varsayılan kullanıcı ID'nizi state'den alın
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/cart/UpdateQuantity`, {
        userId,
        productId,
        quantity: newQuantity
    });
    return { productId, quantity: newQuantity };  // Güncellenen productId ve miktarı döndürün
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],  // Sepetteki ürünler
        loading: false,
        error: null
    },
    reducers: {
        // Burada senkron cart reducers tanımlayabilirsiniz.
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

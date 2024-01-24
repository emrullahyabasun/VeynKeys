import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('users/loginUser', async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/loginuser`, { username, password });
      // API'nin JWT token döndürdüğünü varsayıyoruz.
      return response.data; // Burada { user, token } gibi bir nesne döndürülür.
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  });

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
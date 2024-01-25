import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('users/loginUser', async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`https://localhost:7297/api/auth/loginuser`, { username, password });

    return response.data;
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

        state.user = {
          id: action.payload.userId,
          username: action.payload.username,
          email: action.payload.email,

        };
        state.token = action.payload.authToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
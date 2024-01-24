import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('users/loginUser', async ({ email, password }) => {
    const response = await fetch('http://localhost:3000/Users');
    const users = await response.json();
    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
        return foundUser;
    } else {
        throw new Error('Invalid email or password');
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
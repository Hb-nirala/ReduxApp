import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await axios.get('https://fakestoreapi.com/users')
    return response.data
})
export const newsSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            if (state.loading) {
                state.loading = true
            }
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            if (state.loading) {
                state.data = action.payload
                state.loading = false
            }
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            if (state.loading) {
                state.loading = false
                state.error = action.payload
            }
        })
    },
})
export default newsSlice.reducer
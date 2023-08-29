import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const postUsersData = createAsyncThunk('users/postUsersData', async (data) => {
    const url = 'https://crudcrud.com/api/50459b621b764371a5d4fa052aa1ada5/unicorns';

    // const config = {
    //     url: 'https://crudcrud.com/api/1e9a9ed73eb34f0daa3bf2022ba06b5d',
    //     headers: {},
    //     data: data
    // }

    const response = await axios.post(url, data)
        .then(function (response) {
            console.log("JSON.stringify(response.data)==", JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log("error===", error);
        });
    return response.data
})

const initialState = {
    loading: true,
    postData: null,
    error: null
};

export const newsSlicePostData = createSlice({
    name: 'users_data_post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postUsersData.pending, (state, action) => {
            if (state.loading) {
                state.loading = true
            }
        })
        builder.addCase(postUsersData.fulfilled, (state, action) => {
            if (state.loading) {
                state.postData = action.payload
                state.loading = false
            }
        })
        builder.addCase(postUsersData.rejected, (state, action) => {
            if (state.loading) {
                state.loading = false
                state.error = action.payload
            }
        })
    },
})
export default newsSlicePostData.reducer
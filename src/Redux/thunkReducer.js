import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./thunkActions";
import { useDispatch } from "react-redux";

const initialState = {
    news: null,
    isLoading: false,
    error: null
}

// const newsReducer = (state = initialState, action) => {
//     console.log("action", action.payload);
//     switch (action.type) {
//         case FETCH_REQUEST:
//             return {
//                 ...state,
//                 isLoading: true,
//                 error: null
//             };
//         case FETCH_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 news: action.payload
//             };
//         case FETCH_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: action.payload
//             };
//         default:
//             return state;
//     }
// }

// export default newsReducer







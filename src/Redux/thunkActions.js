import { createSlice } from "@reduxjs/toolkit";

export const FETCH_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    console.log("news-fetchNewsSuccess", news);
    return {
        type: FETCH_SUCCESS,
        payload: news
    }
}

export const fetchNewsFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest())
        fetch('https://fakestoreapi.com/users')
            .then((res) => res.json())
            .then((data) => {
                const userData = data.map((item) => {
                    return {
                        id: item.id,
                        email: item.email,
                        username: item.username,
                        password: item.password
                    }
                })
                console.log("userData==", userData);
                dispatch(fetchNewsSuccess(userData))
            }).catch((error) => {
                dispatch(fetchNewsFailure(error.message))
            })
    }
}

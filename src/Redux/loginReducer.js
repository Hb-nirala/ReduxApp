import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        loginData: '',
        authUserData: {}
    }
}

// const loginStore = async (data) => {
//     try {
//         await AsyncStorage.setItem('loginData', JSON.stringify(data));
//     }
//     catch (errors) {
//         console.log("errors", errors);
//     }
// }

// const removeLoginData = async (key) => {
//     try {
//         await AsyncStorage.removeItem(key);
//         return true;
//     }
//     catch (exception) {
//         return false;
//     }
// }

export const loginReducer = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        getLoginData: (state, action) => {
            state.value.loginData = action.payload
        },
        getAuthUserData: (state, action) => {
            state.value.authUserData = action.payload
            // loginStore(action.payload)
        },
        setAuthUserLoginData: (state, action) => {
            state.value.authUserData = action.payload
        },
        onUserLogout: (state, action) => {
            state.value.authUserData = action.payload
            // removeLoginData('loginData')
        }
    }
})





// export const loginThunk =
// (name, password) =>
// (dispatch((name, password))) => {
//    dispatch(loginRequest());
//    try {
//       api.login(name, password);
//    }catch (err) {
//      dispatch(loginFailure(err));
//      return;
//    }
//    dispatch(loginSuccess());
// };

export const { getLoginData, getAuthUserData, setAuthUserLoginData, onUserLogout } = loginReducer.actions

export default loginReducer.reducer
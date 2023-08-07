import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        signUpDataArray: []
    }
}

// const signUpStore = async (data) => {
//     try {
//         await AsyncStorage.setItem('signUpData', JSON.stringify(data));
//     }
//     catch (errors) {
//         console.log("errors", errors);
//     }
// }

export const signUpReducer = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
        addSignUpData: (state, action) => {
            if (state.value.signUpDataArray.length > 0) {
                state.value.signUpDataArray = [...state.value.signUpDataArray, action.payload];
            }
            else {
                state.value.signUpDataArray.push(action.payload);
            }
            // signUpStore(state.value.signUpDataArray)
            // state.value.signUpDataArray.push(action.payload);
            // signUpStore(state.value.signUpDataArray)
        },
        setSignUpData: (state, action) => {
            state.value.signUpDataArray = [...action.payload];
        }
    }
})

export const { addSignUpData,setSignUpData } = signUpReducer.actions
export default signUpReducer.reducer
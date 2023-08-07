import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import productReducer from './productReducer';
import editProductItemReducer from './editProductItemReducer';
import thunk from 'redux-thunk';
import newsReducer from './thunkReducer';
import { configureStore } from '@reduxjs/toolkit';



const rootReducer = combineReducers(
  {
    SignUp: signUpReducer,
    Login: loginReducer,
    Product: productReducer,
    EditProductItem: editProductItemReducer,
  }, newsReducer
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['EditProductItem']
}

const persistedReducer = persistReducer(persistConfig, rootReducer,)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

// reducer: {
//   news: newsReducer, // Add your newsSlice reducer
// },

// export const store = configureStore({
//   reducer: {
//     persistedReducer
//   },
// }, applyMiddleware(thunk)
// )


export const persistor = persistStore(store)


// import { configureStore } from '@reduxjs/toolkit'
// import newsSlice from './newsSlice'

// const store = configureStore({
//   reducer: {
//     users: newsSlice,
//   },
// })
// export default store

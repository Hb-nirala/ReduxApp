import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import productReducer from './productReducer';
import editProductItemReducer from './editProductItemReducer';
import thunk from 'redux-thunk';
import newsSlice from './ApiCalls/newsSlice';
import newsSlicePostData from './ApiCalls/newsSlicePost';
import cartReducer from './CartRedux/CartReducer';

const rootReducer = combineReducers(
  {
    SignUp: signUpReducer,
    Login: loginReducer,
    Product: productReducer,
    EditProductItem: editProductItemReducer,
    users: newsSlice,
    users_data_post: newsSlicePostData,
    cartReducer
  },
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['EditProductItem', 'users', 'users_data_post', 'cartReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)


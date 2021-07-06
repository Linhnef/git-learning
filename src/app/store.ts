import {  configureStore ,combineReducers} from '@reduxjs/toolkit';
import {counterSlice} from '../features/counter/counter';
import authSlice from 'features/auth/auth';
import { cartSlice } from 'features/food/cart';
import { fecthDataSlice } from 'features/API/fetchSlice';

const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,
    auth : authSlice.reducer,
    cart : cartSlice.reducer,
    fetch : fecthDataSlice.reducer
  }
});

type RootState = ReturnType<typeof store.getState>;


export const counterSelector = (state : RootState) => state.counter.counter;
export const authSelector = (state : RootState) => state.auth.isLogin;
export const itemsCartSElector = (state : RootState) => state.cart.items;
export const totalAmountSelector = (state : RootState) => state.cart.totalAmount
export const dataFetchSelector = (state : RootState) => state.fetch.data;
export const loadingFetchSelector = (state : RootState) => state.fetch.loading;
export const errorFetchSelector = (state : RootState) => state.fetch.error;


export default store;
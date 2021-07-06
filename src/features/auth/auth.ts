import * as React from 'react';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';


export interface authProps{
    isLogin : boolean
}

const initialAuthState : authProps = {
    isLogin : true
}


const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isLogin = true
        },
        logout(state){
            state.isLogin = false
        }
    }
});
export const {login,logout} = authSlice.actions;

export default authSlice;
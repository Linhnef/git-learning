import * as React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface orderProps{
  id : string,
  price : number,
  amount : number,
  description : string
}

interface state{
    items : orderProps[]
    totalAmount : any
}

export const defaultCartState : state = {
    items: [],
    totalAmount: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultCartState,
    reducers:{
        add(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem){
                state.totalAmount += newItem.price;   
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    description : newItem.description,
                    amount: 1
                });
              
            } else {
              existingItem.amount++;
              state.totalAmount += existingItem.price;
            }
        },
        remove(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
            if (existingItem.amount === 1) {
              state.items = state.items.filter(item => item.id !== id);
            } else {
              existingItem.amount -= 1;
            }
            state.totalAmount -= existingItem.price;
        }
        }
    }
});

export const { add,remove } = cartSlice.actions;

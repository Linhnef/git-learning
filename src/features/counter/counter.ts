import * as React from 'react';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';

export interface counterProps{
    counter : number
}
export const initialCounterState : counterProps = { counter: 0};

export const counterSlice = createSlice({
  name: 'counter',
  initialState : initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action : PayloadAction<number>) {
      state.counter = state.counter + action.payload;
    }
  }
});

export const { increment,decrement,increase } = counterSlice.actions;



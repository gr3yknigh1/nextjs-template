import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CounterState {
  count: number,
}


function loadCounterState(): CounterState {
  return {
    count: 0,
  };
}


export const counterSlice = createSlice({
  name: "counter",
  initialState: loadCounterState(),
  reducers: {
    increment: (state: CounterState, action: PayloadAction) => {
      state.count = state.count + 1;
    },
    decrement: (state: CounterState, action: PayloadAction) => {
      state.count = state.count - 1;
    },
  }
});


export const counterReducer = counterSlice.reducer;


export const {
  increment,
  decrement,
} = counterSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  money: number;
}

const initialState: CounterState = {
  money: 0,
};

export const userSlice = createSlice({
  name: "initialItem",
  initialState,
  reducers: {
    setMoney: (state, action) => {
      state.money += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMoney } = userSlice.actions;

export default userSlice.reducer;

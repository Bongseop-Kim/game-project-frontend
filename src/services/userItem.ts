import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  id: string;
  email: string;
  name: string;
  strong: number;
  money: number;
}

const initialState: CounterState = {
  id: "",
  email: "",
  name: "",
  strong: 0,
  money: 0,
};

export const userSlice = createSlice({
  name: "initialItem",
  initialState,
  reducers: {
    setMoney: (state, action) => {
      state.money = action.payload;
    },
    setStrong: (state, action) => {
      state.strong = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMoney, setStrong, setId, setName, setEmail } = userSlice.actions;

export default userSlice.reducer;

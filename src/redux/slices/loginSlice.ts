// src/store/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
    set: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin, set } = loginSlice.actions;
export default loginSlice.reducer;

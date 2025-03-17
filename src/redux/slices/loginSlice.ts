import { UserInfo } from '@/layout/app-header';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isLogin: boolean;
  currentUser: UserInfo | null;
}

const initialState: LoginState = {
  isLogin: false,
  currentUser: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLogin: (state) => {
      state.isLogin = true;
    },
    setCurrentUser: (state, action: PayloadAction<UserInfo>) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.currentUser = null;
    },
  },
});

export const { setIsLogin, setCurrentUser, logout } = loginSlice.actions;

export default loginSlice.reducer;
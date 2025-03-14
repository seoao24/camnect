import { configureStore } from '@reduxjs/toolkit';

// Nếu bạn có nhiều reducers, bạn có thể import ở đây
import loginReducer from './slices/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

// Kiểu cho RootState và AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
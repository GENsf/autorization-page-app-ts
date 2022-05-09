import { configureStore } from '@reduxjs/toolkit'

import phoneReducer from './slices/phoneSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		phone: phoneReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
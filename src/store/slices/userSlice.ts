import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuth {
	id: string | null,
	email: string | null,
	password?: string | null,
	token?: string | null
}

const initialState = {
	id: null,
	email: null,
	password: null,
	token: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state: IAuth, action: PayloadAction<IAuth>): void => {
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.token = action.payload.token;
		},
		removeUser: (state: IAuth): void => {
			state.id = null;
			state.email = null;
			state.password = null;
			state.token = null;
		}
	},
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuth {
  id?: string,
  email?: string | null,
  password?: string,
  token?: string,
  isLoad?: boolean,
}

const initialState = {
  id: '',
  email: '',
  password: '',
  token: '',
  isLoad: false,
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
      state.id = '';
      state.email = '';
      state.password = '';
      state.token = '';
    },
    toggleLoader: (state: IAuth, action: PayloadAction<IAuth>): void => {
      state.isLoad = action.payload.isLoad;
    },
  },
});

export const { setUser, removeUser, toggleLoader } = userSlice.actions;
export default userSlice.reducer;
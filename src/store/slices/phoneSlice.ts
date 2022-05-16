import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPhone {
  id?: number,
  name: string,
  number: string,
  search?: string
}

const initialState: IPhone[] = [
  { id: 1, name: 'Анфим Снегирев', number: '89976567564'},
  { id: 2, name: 'Иван Максимыч', number: '89934534554'},
  { id: 3, name: 'Дим Димыч', number: '89345455554'},
  { id: 4, name: 'Лунтик c Луны', number: '89967867884'},
];

const phoneSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    addPhone: (state: IPhone[], action: PayloadAction<IPhone>): void => {
      const newPhone = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      state.push(newPhone);
    },
    removePhone: (state: IPhone[], action: PayloadAction<IPhone>): IPhone[] => {
      return state.filter((phone: IPhone) => phone.id !== action.payload.id);
    },
    editPhone: (state: IPhone[], action: PayloadAction<IPhone>): void => {
      let indexEditPhone: number = -1;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) indexEditPhone = i;
      }
      const editPhone: IPhone = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      state.splice(indexEditPhone, 1, editPhone);
    },
  },
});

export const { addPhone, removePhone, editPhone } = phoneSlice.actions;
export default phoneSlice.reducer;
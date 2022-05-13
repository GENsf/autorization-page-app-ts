import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IPhone = {
	id?: number,
	name: string,
	number: string,
	search?: string
}

const initialState: IPhone[] = [
	{ id: 1, name: 'Анфим Снегирев', number: '89976567564'},
	{ id: 2, name: 'Иван Максимыч', number: '89934534554'},
	{ id: 3, name: 'Дим Димыч', number: '89345455554'},
	{ id: 4, name: 'Лунтик c Луны', number: '89967867884'}
]

const phoneSlice = createSlice({
	name: 'phones',
	initialState,
	reducers: {
		addPhone: (state: IPhone[], action: PayloadAction<IPhone>) => {
			const newPhone = {
				id: action.payload.id,
				name: action.payload.name,
				number: action.payload.number,
			}
			state.push(newPhone);
		},
		removePhone: (state: IPhone[], action: PayloadAction<IPhone>) => {
			return state.filter((phone: IPhone) => phone.id !== action.payload.id);
		},
		editPhone: (state: IPhone[], action: PayloadAction<IPhone>) => {
			
		}
	}
});

export const { addPhone, removePhone, editPhone } = phoneSlice.actions;
export default phoneSlice.reducer;
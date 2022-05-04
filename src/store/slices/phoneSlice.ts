import { createSlice } from '@reduxjs/toolkit';

const phoneSlice = createSlice({
	name: 'phones',
	initialState: [
		{ id: 1, name: 'Анфим Снегирев', number: 89976567564},
		{ id: 2, name: 'Иван Максимыч', number: 89934534554},
		{ id: 3, name: 'Дим Димыч', number: 89345455554},
		{ id: 4, name: 'Лунтик Кузькин', number: 89967867884}
	],
	reducers: {
		addPhone: (state, action) => {
			const newPhone = {
				id: Date.now(),
				name: action.payload.name,
				number: action.payload.number,
			}
			state.push(newPhone);
		},
		removePhone: (state, action) => {
			return state.filter((phone) => phone.id !== action.payload.id);
		}
	}
});

export const { addPhone, removePhone } = phoneSlice.actions;

export default phoneSlice.reducer;
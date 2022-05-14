import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type IEditModal = {
	show: boolean,
	id?: number,
	name?: string,
	number?: string
}

const initialState = {
	show: false,
	id: 0,
	name: '',
	number: ''
};

const editModalSlice = createSlice({
	name: 'editModal',
	initialState,
	reducers: {
		showEditModal: (state: IEditModal, action: PayloadAction<IEditModal>) => {
			state.show = true;
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.number = action.payload.number;
		},
		hideEditModal: (state: IEditModal, action: PayloadAction<IEditModal>) => {
			state.show = false;
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.number = action.payload.number;
		}
	},
});

export const { showEditModal, hideEditModal } = editModalSlice.actions;
export default editModalSlice.reducer;
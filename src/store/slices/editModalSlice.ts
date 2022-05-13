import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type IEditModal = {
	show: boolean,
	name?: string,
	number?: string
}

const initialState = {
	show: false,
	name: '',
	number: ''
};

const editModalSlice = createSlice({
	name: 'editModal',
	initialState,
	reducers: {
		showEditModal: (state: IEditModal, action: PayloadAction<IEditModal>) => {
			state.show = true;
			state.name = action.payload.name;
			state.number = action.payload.number;
		},
		hideEditModal: (state: IEditModal, action: PayloadAction<IEditModal>) => {
			state.show = false;
			state.name = '';
			state.number = '';
		}
	},
});

export const { showEditModal, hideEditModal } = editModalSlice.actions;
export default editModalSlice.reducer;
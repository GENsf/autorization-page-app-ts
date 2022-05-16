import { createSlice, PayloadAction} from '@reduxjs/toolkit';

type IAddModal = {
  show: boolean,
}

const initialState = {
  show: false,
};

const addModalSlice = createSlice({
  name: 'addModal',
  initialState,
  reducers: {
    showAddModal: (state: IAddModal, action: PayloadAction<IAddModal>): void => {
      state.show = true;
    },
    hideAddModal: (state: IAddModal, action: PayloadAction<IAddModal>): void => {
      state.show = false;
    },
  },
});

export const { showAddModal, hideAddModal } = addModalSlice.actions;
export default addModalSlice.reducer;
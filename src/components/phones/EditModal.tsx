import { useState } from 'react'
import { UseAppDispatch, UseAppSelector } from 'hooks/reduxHooks';
import { editPhone } from 'store/slices/phoneSlice';
import { RootState } from 'store';
import { hideEditModal } from 'store/slices/editModalSlice';


const EditModal: React.FC = () => {
	const dispatch = UseAppDispatch();

	const show: boolean = UseAppSelector((state: RootState) => state.editModal.show);
	const editName: string = UseAppSelector((state: RootState) => state.editModal.name);
	const editNumber: string = UseAppSelector((state: RootState) => state.editModal.number);
	
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	
	
	const [errName, setErrName] = useState(false);
	const [errNumber, setErrNumber] = useState(false);

	const edit = (): void => {
		if (name.trim() == '') {
			setErrName(true);
			return
		}
		setErrName(false);
		if (number.trim().replace(/[^+\d]/g, '') == '') {
			setErrNumber(true);
			return
		}
		setErrNumber(false);
			dispatch(
				editPhone({
					name: name,
					number: number,
				})
			)
		closeModal()
		setName('')
		setNumber('')
	}

	const closeModal = () => {
		dispatch(
			hideEditModal({
				show: false,
				name: '',
				number: ''
			})
		)
	}
	
  return (
	 <div className={`modal-background ${show ? 'show' : 'hidden'}`} onClick={() => closeModal()}>
		 <div className="modal-content" onClick={(element) => element.stopPropagation()}>
		 	<h2>Edit phone number {editName}</h2>
			<form>
				<label>Name</label>
				<input 
					id="name"
					className={errName ? 'error' : ''}
					type="text" 
					value={name}
					onChange={(event) => setName(event.target.value)}
					placeholder="Enter name" 
				/>
				<label>Number</label>
				<input
					id="number"
					className={errNumber ? 'error' : ''}
					type="tel" 
					value={number}
					onChange={(event) => setNumber(event.target.value.replace(/[^+\d]/g, ''))}
					placeholder="Enter number" 
				/>
			</form>
			<button className="add_btn" onClick={() => edit()}>Edit</button>
		 </div>
	 </div>
  )
}

export default EditModal

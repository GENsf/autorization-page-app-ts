import { Dispatch, SetStateAction, useState } from 'react'
import { UseAppDispatch, UseAppSelector } from 'hooks/reduxHooks';
import { addPhone } from 'store/slices/phoneSlice';
import { RootState } from 'store';
import { hideAddModal } from 'store/slices/addModalSlice';

type props = {setAddShow?: Dispatch<SetStateAction<boolean>>}

const AddModal: React.FC<props> = ({setAddShow}) => {
	const dispatch = UseAppDispatch();
	
	const show: boolean = UseAppSelector((state: RootState) => state.addModal.show);
	
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [errName, setErrName] = useState(false);
	const [errNumber, setErrNumber] = useState(false);

	const add = (): void => {
		if (name.trim() == '') {
			setErrName(true);
			return
		}
		setErrName(false);
		if (number.trim() == '') {
			setErrNumber(true);
			return
		}
		setErrNumber(false);

		dispatch(
			addPhone({
				id: Date.now(),
				name: name,
				number: number
		}))
		closeModal()
	}

	const closeModal = (): void => {
		dispatch(
			hideAddModal({
				show: false,
			})
		)
		if (setAddShow) setAddShow(false)
		setName('')
		setNumber('')
	}
	
  return (
	 <div className={`modal-background ${show ? 'show' : 'hidden'}`} onClick={() => closeModal()}>
		 <div className="modal-content" onClick={(element) => element.stopPropagation()}>
		 	<h2>Add new phone number</h2>
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
			<button className="add_btn" onClick={() => add()}>Add</button>
		 </div>
	 </div>
  )
}

export default AddModal
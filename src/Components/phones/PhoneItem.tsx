import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { showEditModal } from 'store/slices/editModalSlice';

import { removePhone, IPhone } from 'store/slices/phoneSlice'


const PhoneItem = ({ id, name, number }: IPhone) => {
	const dispatch = useDispatch();
	
	const handleRemove = () => {
		const conf: boolean = window.confirm('Are you shure?')
		if (conf) dispatch(removePhone({
			id: id,
			name: name,
			number: number
		}))
		return
	}

	const handleEdit = () => {
		dispatch(showEditModal({
			show: true,
			id: id,
			name: name,
			number: number,
		}))
	}

  return (
	 <section className='phone_item' key={id}>
		<div className='content'>
				<p className='phone_name'>
					{name}
				</p>
				<p className="phone_number">
					{number}
				</p>
		</div>
		<div>
			<button className='edit_btn' onClick={handleEdit}>edit</button>
			<button className='delete_btn' onClick={handleRemove}>x</button>
		</div>
	 </section>
  )
}

export default PhoneItem

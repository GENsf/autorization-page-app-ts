import { useState } from 'react'
import { Navigate } from "react-router-dom";

import { UseAppDispatch } from 'hooks/reduxHooks';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';
import { showAddModal } from 'store/slices/addModalSlice';

import PhoneList from 'components/phones/PhoneList';
import AddModal from 'components/phones/AddModal';
import EditModal from 'components/phones/EditModal';

const HomePage = () => {
	const dispatch = UseAppDispatch();
	const {isAuth, email} = useAuth();
	const [searchName, setSearchName] = useState<string>('')

	const [addShow, setAddShow] = useState<boolean>(false)
	
	const login = (email: null | string) => {
		if (typeof email == 'string') 
		return email.split('@')[0]
	}

	const changeSearch = (value: string) => {
		setSearchName(value)
	}

	const showModalClick = () => {
		dispatch(showAddModal({
			show: true
		}))
		setAddShow(true)
	}

	return isAuth ? (
		<>
			<section className='top'>
				<h2>Hello <span>{login(email)}</span></h2>
				<input
					type='text' 
					id='search'
					className='search'
					value={searchName}
					onChange={(event) => changeSearch(event.target.value)}
					placeholder='Search'
				/>
				<div className='buttons'>
					<button className="add_btn" onClick={() => showModalClick()}>Add number</button>
					<button className="logout_btn" onClick={() => dispatch(removeUser())}>Log out</button>
				</div>
			</section>
			{addShow &&
			<AddModal {...setAddShow} />
			}
			<EditModal />
			<section className="phone_list">
				<PhoneList searchValue={searchName} /> 
			</section>
		</>
	) : (
		<>
			<Navigate replace to="/login"></Navigate>
		</>
	);
};

export default HomePage;
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";

import { UseAppDispatch } from '../hooks/reduxHooks';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';
import { addPhone } from '../store/slices/phoneSlice';
import PhoneList from '../components/phones/PhoneList';

const HomePage = () => {
	const dispatch = UseAppDispatch();

	const {isAuth, email} = useAuth();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const login = (email: null | string) => {
		if (typeof email == 'string') 
		return email.split('@')[0]
	}

	const add = (): void => {
		if (name.trim() == "") return alert("Enter the name")
		if (number.trim() == "") return alert("Enter the number")
		dispatch(
			addPhone({
				name: name,
				number: number
		}));
	}

	return true ? (
		<>
			<section className='top'>
				<h2>Hello <span>{login(email)}</span></h2>
				<div className='buttons'>
					<Button variant="success" onClick={() => add()}>Add number</Button>
					<Button variant="danger" onClick={() => dispatch(removeUser())}>Log out</Button>
				</div>
			</section>
				<Form>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control 
							id="name"
							type="text" 
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Enter name" 
						/>
						<Form.Label>Number</Form.Label>
						<Form.Control 
							type="tel" 
							value={number}
							onChange={(e) => setNumber(e.target.value)}
							placeholder="Enter number" 
						/>
					</Form.Group>
				</Form>
			<section className="phone_list">
				<PhoneList />
			</section>
		</>
	) : (
		<>
			<Navigate replace to="/login"></Navigate>
		</>
	);
};

export default HomePage;
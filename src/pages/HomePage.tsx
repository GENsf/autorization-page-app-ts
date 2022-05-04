import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";
import PhoneList from '../Components/phones/PhoneList';
import { UseAppDispatch } from '../hooks/redux-hooks';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';
import { addPhone } from '../store/slices/phoneSlice';
import { useState } from 'react'


const HomePage = () => {
	const {isAuth, email} = useAuth();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const dispatch = UseAppDispatch();

	const login = (email: null | string) => {
		if (typeof email == 'string') 
		return email.split('@')[0]
	}

	const add = (): void => {
		if (!name && !number) return
		dispatch(
			addPhone({
				name: name,
				number: number
		}));
	}


	return true ? (
		<div className='content' style={{width: '80%', margin: '0 auto'}}>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<h2>Hello <span>{login(email)}</span></h2>
				<div className='buttons'>
					<Button variant="success" onClick={() => add()}>Add number</Button>
					<Button variant="danger" onClick={() => dispatch(removeUser())}>Log out</Button>
				</div>
			</div>
			<div>
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
						<Form.Control 
							type="number" 
							value={number}
							onChange={(e) => setNumber(e.target.value)}
							placeholder="Enter number" 
						/>
					</Form.Group>
				</Form>
			</div>
			<div className="phone_list">
				<PhoneList></PhoneList>
			</div>
		</div>
	) : (
		<>
			<Navigate replace to="/login"></Navigate>
		</>
	);
};

export default HomePage;
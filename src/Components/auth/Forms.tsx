import React from 'react'
import {FC, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface FormProps{
	title: string;
	handleClick: (email: string, pass: string) => void;
}

const Forms: FC<FormProps> = ({title, handleClick}) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

  return (
	 <div>
			<h1>{title}</h1>
			<Form>
				<Form.Group>
					<Form.Label>Login</Form.Label>
					<Form.Control 
						type="email" 
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter email" 
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control 
						type="password" 
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						placeholder="Password" 
					/>
				</Form.Group>
				<Button onClick={() => handleClick(email, pass)} >{title}</Button>
			</Form>
	 </div>
  )
}

export {Forms}

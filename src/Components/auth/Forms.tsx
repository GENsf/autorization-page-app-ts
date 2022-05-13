import {FC, useState } from 'react'

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
			<form>
				<label>Email</label>
				<input 
					type="email" 
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter email" 
				/>
				<label>Password</label>
				<input 
					type="password" 
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					placeholder="Password" 
				/>
				<button className="add_btn" onClick={(elem) => {elem.preventDefault(); handleClick(email, pass)}} >{title}</button>
			</form>
	 </div>
  )
}

export {Forms}

import React from 'react';
import {Link} from "react-router-dom";
import { Register } from '../Components/auth/Register';

const RegisterPage = () => {
	return (
		<div>
			<Register />
			<p>
				Already have an account? <Link to="/login">Sign in</Link>
			</p>

		</div>
	);
};

export default RegisterPage;
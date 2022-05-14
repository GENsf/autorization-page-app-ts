import {Link} from "react-router-dom";

import { Register } from 'components/auth/Register';

const RegisterPage: React.FC = () => {
	return (
		<section>
			<Register />
			<p>
				Already have an account? <Link to="/login">Sign in</Link>
			</p>

		</section>
	);
};

export default RegisterPage;
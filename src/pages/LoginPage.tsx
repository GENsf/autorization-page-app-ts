import {Link} from "react-router-dom";

import {Login} from 'components/auth/Login';

const LoginPage: React.FC = () => {
	return (
		<section>
				<Login />
			<p>
				Or <Link to="/register">register</Link>
			</p>
		</section>
	);
};

export default LoginPage;
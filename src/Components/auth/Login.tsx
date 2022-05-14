import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';

import { setUser } from 'store/slices/userSlice'
import { Forms } from './Forms';
import { AppDispatch } from 'store';

const Login: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	function handleLogin(email: string, password: string): void {
		if (!email && !password)
			return;
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken,
				}));
				navigate('/');
			})
			.catch((error) => alert(error.message));
		navigate('/');
	}
  return (
	<Forms 
		title="Log In"
		handleClick={handleLogin}
	/>
  )
}

export {Login}

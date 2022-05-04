import {Forms} from './Forms';
import {setUser} from '../../store/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { UseAppDispatch } from '../../hooks/redux-hooks';

const Register = () => {
	const dispatch = UseAppDispatch();
	const navigate = useNavigate()

	const handleRegister = (email: string, password: string) => {
		if (!email && !password) return
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			 .then(({user}) => {
				  dispatch(setUser({
						email: user.email,
						id: user.uid,
						token: user.refreshToken,
				  }));
				  navigate('/');
			 })
			 .catch((error) => alert(error.message))
  }
  return (
	 <div>
		<Forms 
			title="Register"
			handleClick={handleRegister}
		/>
	 </div>
  )
}

export {Register}

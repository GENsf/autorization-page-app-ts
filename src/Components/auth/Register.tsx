import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { setUser } from 'store/slices/userSlice';
import { UseAppDispatch } from 'hooks/reduxHooks';
import { Forms } from './Forms';

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
				  alert('User ' + email + ' has been successfully registered!')
				  navigate('/login');
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

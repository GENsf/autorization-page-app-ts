import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from 'store/slices/userSlice'
import { UseAppDispatch } from 'hooks/reduxHooks';
import { Forms } from './Forms';

const Login = () => {
	const dispatch = UseAppDispatch();
	const navigate = useNavigate();

	const handleLogin = (email: string, password: string) => {
		if (!email && !password) return
		const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch((error) => alert(error.message))
		navigate('/')
	}
  return (
	 <div>
		<Forms 
			title="Log In"
			handleClick={handleLogin}
		/>
	 </div>
  )
}

export {Login}

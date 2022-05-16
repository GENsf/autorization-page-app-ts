import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { AppDispatch } from 'store';
import { setUser, toggleLoader } from 'store/slices/userSlice';
import { Forms } from './Forms';

const Register: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string): void => {
    if (!email && !password) return;
    dispatch(toggleLoader({isLoad: true }));

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        alert('User ' + email + ' has been successfully registered!');
        dispatch(toggleLoader({isLoad: false }));
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
        dispatch(toggleLoader({isLoad: false }));
      });
  };
  return (
    <Forms 
      title="Register"
      handleClick={handleRegister} 
    />
  );
};

export {Register};

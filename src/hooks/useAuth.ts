import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { IAuth } from 'store/slices/userSlice';

export interface IUseAuth extends IAuth {
	isAuth: boolean
}

export const useAuth = (): IUseAuth => {
	const {id, email, password}: IAuth = useSelector((state: RootState) => state.user);

	return {
		isAuth: !!email,
		id,
		email,
		password
	}
}
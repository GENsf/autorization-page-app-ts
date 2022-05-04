import { UseAppSelector } from './redux-hooks';

export function useAuth() {
	const {id, email, password} = UseAppSelector(state => state.user);

	return {
		isAuth: !!email,
		id,
		email,
		password
	}
}
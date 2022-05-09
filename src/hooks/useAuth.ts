import { UseAppSelector } from './reduxHooks';

export function useAuth() {
	const {id, email, password} = UseAppSelector(state => state.user);

	return {
		isAuth: !!email,
		id,
		email,
		password
	}
}
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import PhoneItem from './PhoneItem'


export interface Phone {
	id: number,
	name: string,
	number: number
}

const PhoneList = () => {

	const phones: Phone[] = useSelector((state: RootState) => state.phone);

	if (!phones.length) {
		return (
			<p style={{color: 'gray', textAlign: 'center'}}>No numbers</p>
		)
	}

  return (
	 <ul>
		 {phones.map((phone) => (
			<PhoneItem key={phone.id} id={phone.id} name={phone.name} number={phone.number}></PhoneItem>
		 ))}
	 </ul>
  )
}

export default PhoneList


import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { IPhone } from 'store/slices/phoneSlice';
import PhoneItem from './PhoneItem'

type Search = {searchValue: string}

const PhoneList: React.FC<Search>= ({searchValue}) => {
	const phones: IPhone[] = useSelector((state: RootState) => state.phone);
	let result: IPhone[] = phones
	let searchText: string = searchValue.toLowerCase();

	if (searchText) result = phones.filter(item => item.name?.toLowerCase().search(searchText) !== -1 || item.number?.search(searchText) !== -1);
	if (!result.length) return <p className='no_numbers'>No numbers</p>

  return (
	 <ul>
		 {result.map((phone) => (
			<PhoneItem key={phone.id} id={phone.id} name={phone.name} number={phone.number}></PhoneItem>
		 ))}
	 </ul>
  )
}

export default PhoneList


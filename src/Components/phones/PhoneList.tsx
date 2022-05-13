import { UseAppSelector } from 'hooks/reduxHooks';

import { RootState } from 'store';
import { IPhone } from 'store/slices/phoneSlice';
import PhoneItem from './PhoneItem'

type ISearch = {searchValue: string}

const PhoneList: React.FC<ISearch>= ({searchValue}) => {
	const phones: IPhone[] = UseAppSelector((state: RootState) => state.phone);
	let result: Array<IPhone> = phones
	let searchText: string = searchValue.toLowerCase();

	if (searchText) {
		result = phones.filter(item => item.name?.toLowerCase().search(searchText) !== -1 || item.number?.search(searchText) !== -1);
	}

	if (!result.length) {
		return (
			<p className='no_number'>No numbers</p>
		)
	}

  return (
	 <ul>
		 {result.map((phone) => (
			<PhoneItem key={phone.id} id={phone.id} name={phone.name} number={phone.number}></PhoneItem>
		 ))}
	 </ul>
  )
}

export default PhoneList


import React from 'react'
import PhoneItem from './PhoneItem'
import { useSelector } from 'react-redux';


export interface PhoneTypes {
	id: Number,
	name: String,
	number: Number
}

const PhoneList = () => {

	const phones: [PhoneTypes] = useSelector((state) => state.phone);

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


import { useDispatch } from 'react-redux';

import { AppDispatch } from 'store';
import { showEditModal } from 'store/slices/editModalSlice';
import { removePhone, IPhone } from 'store/slices/phoneSlice';

const PhoneItem: React.FC<IPhone> = ({ id, name, number }) => {
  const dispatch: AppDispatch = useDispatch();
  
  function handleRemove(): void {
    const conf: boolean = window.confirm('Are you shure?');
    if (conf)
      dispatch(removePhone({
        id: id,
        name: name,
        number: number,
      }));
  }

  function handleEdit(): void {
    dispatch(showEditModal({
      show: true,
      id: id,
      name: name,
      number: number,
    }));
  }

  return (
    <li className='phone_item' key={id}>
      <div className='content'>
        <p className='phone_name'>
          {name}
        </p>
        <p className="phone_number">
          {number}
        </p>
      </div>
      <div>
        <button className='edit_btn' onClick={handleEdit}>edit</button>
        <button className='delete_btn' onClick={handleRemove}>x</button>
      </div>
    </li>
  );
};

export default PhoneItem;

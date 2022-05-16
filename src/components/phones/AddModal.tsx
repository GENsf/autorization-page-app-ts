import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPhone } from 'store/slices/phoneSlice';
import { AppDispatch, RootState } from 'store';
import { hideAddModal } from 'store/slices/addModalSlice';

const AddModal: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const show: boolean = useSelector((state: RootState) => state.addModal.show);
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [errName, setErrName] = useState<boolean>(false);
  const [errNumber, setErrNumber] = useState<boolean>(false);

  function nameChange(name: string): void {
    setName(name);
  };
  function numberChange(number: string): void {
    setNumber(number);
  };

  function closeModal(): void {
    dispatch(
      hideAddModal({
        show: false,
      }),
    );
    setName('');
    setNumber('');
  }

  function add(): void {
    if (name.trim() === '') { setErrName(true); return; }
    setErrName(false);
    if (number.trim() === '') { setErrNumber(true); return; }
    setErrNumber(false);

    dispatch(
      addPhone({
        id: Date.now(),
        name: name,
        number: number,
      }));
    
    closeModal();
  }


  return (
    <div className={`modal-background ${show ? 'show' : 'hidden'}`} onClick={closeModal}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <h2>Add new phone number</h2>
        <form>
          <label>Name</label>
          <input 
            id="name"
            className={errName ? 'error' : ''}
            type="text"
            value={name}
            onChange={(event) => nameChange(event.target.value)}
            placeholder="Enter name" 
          />
          <label>Number</label>
          <input
            id="number"
            className={errNumber ? 'error' : ''}
            type="tel" 
            value={number}
            onChange={(event) => numberChange(event.target.value.replace(/[^+\d]/g, ''))}
            placeholder="Enter number" 
          />
        </form>
        <button className="add_btn" onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default AddModal;
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editPhone } from 'store/slices/phoneSlice';
import { AppDispatch, RootState } from 'store';
import { hideEditModal } from 'store/slices/editModalSlice';


const EditModal: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const show: boolean = useSelector((state: RootState) => state.editModal.show);
  const editId: number = useSelector((state: RootState) => state.editModal.id);
  const editName: string = useSelector((state: RootState) => state.editModal.name);
  const editNumber: string = useSelector((state: RootState) => state.editModal.number);

  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [errName, setErrName] = useState<boolean>(false);
  const [errNumber, setErrNumber] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      setName(editName);
      setNumber(editNumber);
    }
  }, [editName, editNumber, show]);

  function nameChange(name: string): void {
    setName(name);
  };
  function numberChange(number: string): void {
    setNumber(number);
  };

  function closeModal() {
    dispatch(
      hideEditModal({
        show: false,
        id: 0,
        name: '',
        number: '',
      }),
    );
  }

  function edit(): void {
    if (name.trim() === '') { setErrName(true); return; }
    setErrName(false);
    if (number.trim() === '') { setErrNumber(true); return; }
    setErrNumber(false);

    dispatch(
      editPhone({
        id: editId,
        name: name,
        number: number,
      }),
    );
    closeModal();
  }

  
  return (
    <div className={`modal-background ${show ? 'show' : 'hidden'}`} onClick={closeModal}>
      <div className="modal-content" onClick={(element) => element.stopPropagation()}>
        <h2>Edit phone number {editName}</h2>
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
        <button className="add_btn" onClick={edit}>Save</button>
      </div>
    </div>
  );
};

export default EditModal;

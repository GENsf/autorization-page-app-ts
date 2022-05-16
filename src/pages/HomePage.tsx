import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';
import { showAddModal } from 'store/slices/addModalSlice';

import PhoneList from 'components/phones/PhoneList';
import AddModal from 'components/phones/AddModal';
import EditModal from 'components/phones/EditModal';

import { AppDispatch } from 'store';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {isAuth, email} = useAuth();
  const [searchName, setSearchName] = useState<string>('');
  
  function login(): string | void {
    if (email) return email.split('@')[0];
    return '';
  }

  function logout(): void {
    dispatch(removeUser());
  }

  function changeSearch(value: string): void {
    setSearchName(value);
  }

  function addModal(): void {
    dispatch(showAddModal({
      show: true,
    }));
  }

  return isAuth ? (
    <>
      <section className='top'>
        <h2>Hello <span>{login()}</span></h2>
        <input
          type='text' 
          id='search'
          className='search'
          value={searchName}
          onChange={(event) => changeSearch(event.target.value)}
          placeholder='Search'
        />
        <div className='buttons'>
          <button className="add_btn" onClick={addModal}>Add number</button>
          <button className="logout_btn" onClick={logout}>Log out</button>
        </div>
      </section>
      <AddModal />
      <EditModal />
      <section className="phone_list">
        <PhoneList searchValue={searchName} /> 
      </section>
    </>
  ) : (
    <>
      <Navigate replace to="/login"></Navigate>
    </>
  );
};

export default HomePage;
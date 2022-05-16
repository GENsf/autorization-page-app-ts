import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'App.css';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage';
import { AppDispatch, RootState } from 'store';
import { useDispatch } from 'react-redux';
import { toggleLoader } from 'store/slices/userSlice';

function App() {
  const dispatch: AppDispatch = useDispatch();

  const isLoadStore: boolean = useSelector((state: RootState) => state.user.isLoad);
  
  useEffect(() => {
    dispatch(
      toggleLoader({
        isLoad: false,
      }),
    );
  }, [dispatch]);

  return (
    <>
      <header>
        <section><h1>TakeOff Stuff <span>phonebook</span></h1></section>
      </header>
      <main className={isLoadStore ? 'loader': ''}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'App.css';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage';
import { RootState } from 'store';

function App() {
  const [isLoad, setIsLoad] = useState(false);
  const isLoadStore: boolean = useSelector((state: RootState) => state.user.isLoad);
  
  useEffect(() => {
    setIsLoad(false);
  }, []);
  
  useEffect(() => {
    setIsLoad(isLoadStore);
  }, [setIsLoad, isLoadStore]);


  return (
    <>
      <header>
        <section><h1>TakeOff Stuff <span>phonebook</span></h1></section>
      </header>
      <main className={isLoad ? 'loader': ''}>
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

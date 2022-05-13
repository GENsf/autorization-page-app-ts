import {Routes, Route} from "react-router-dom";
import 'App.css';

import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import NotFoundPage from 'pages/NotFoundPage'

function App() {
  return (
	<>
		<header>
			<section><h1>TakeOff Stuff <span>phonebook</span></h1></section>
		</header>
		<main>
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

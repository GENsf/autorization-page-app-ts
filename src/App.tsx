import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from "react-bootstrap";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
	<>
		<header>
			<Container><h1>TakeOff Stuff <span>phonebook</span></h1></Container>
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

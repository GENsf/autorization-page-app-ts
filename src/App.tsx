import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotfoundPage from './pages/NotfoundPage'
import { Container } from "react-bootstrap";

function App() {
  return (
	<>
		<header>
			<Container><h1>TakeOff Stuff <span>phonebook</span></h1></Container>
		</header>
		<Container>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/*' element={<NotfoundPage />} />
			</Routes>
		</Container>
	</>
  );
}

export default App;

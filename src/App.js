import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import { refreshUser } from "./redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route path="register" element={<RegisterForm />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route path="register" element={<RegisterForm />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="contacts" element={<div>contacts</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

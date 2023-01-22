import SharedLayout from "./components/SharedLayout/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/ContactsPage";
import { refreshUser } from "./redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { selectIsRefreshing } from "./redux/auth/authSelectors";
import Spinner from "./utils/Spinner/Spinner";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
function App() {
	const isRefreshing = useSelector(selectIsRefreshing);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<Spinner />
	) : (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route
						path="register"
						element={
							<RestrictedRoute
								component={<RegisterPage />}
								redirectTo="/"
							/>
						}
					/>
					<Route
						path="login"
						element={
							<RestrictedRoute
								component={<LoginPage />}
								redirectTo="/"
							/>
						}
					/>
					<Route
						path="contacts"
						element={
							<PrivateRoute
								component={<Contacts />}
								redirectTo="/login"
							/>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { refreshUser } from "./redux/auth/authOperations";
import { selectIsRefreshing } from "./redux/auth/authSelectors";
import Spinner from "./utils/Spinner/Spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
	const isRefreshing = useSelector(selectIsRefreshing);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<Spinner />
	) : (
		<BrowserRouter basename="goit-react-hw-08-phonebook">
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
								redirectTo="/contacts"
							/>
						}
					/>
					<Route
						path="contacts"
						element={
							<PrivateRoute
								component={<ContactsPage />}
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

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
	selectIsRefreshing,
	selectIsLoggedIn,
} from "./redux/auth/authSelectors";

export default function PrivateRoute({ component, redirectTo = "/" }) {
	const isRefreshing = useSelector(selectIsRefreshing);
	const isLoggedIn = useSelector(selectIsLoggedIn);

	const shouldRedirect = !isLoggedIn && !isRefreshing;
	return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const userName = useSelector((state) => state.auth.user.name);

	return (
		<div>
			<p>Welcome, {userName}</p>
			<button type="button" onClick={() => dispatch(logOut())}>
				Logout
			</button>
		</div>
	);
};

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { selectUserName } from "../../redux/auth/authSelectors";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);

	return (
		<div>
			<p>Welcome, {userName}</p>
			<button type="button" onClick={() => dispatch(logOut())}>
				Logout
			</button>
		</div>
	);
};

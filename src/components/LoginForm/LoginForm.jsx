import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/auth/authOperations";
import FormRow from "../FormRow/FormRow";
export default function LoginForm() {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const { email, password } = form.elements;
		dispatch(
			logIn({
				email: email.value,
				password: password.value,
			})
		);
		form.reset();
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2>LogIn</h2>
			<FormRow name="email" type="email" labelText="Email" />
			<FormRow name="password" type="password" labelText="Password" />
			<button type="submit">LogIn</button>
			<h4>
				Not a member yet?
				<Link to="/register">Register</Link>
			</h4>
		</form>
	);
}

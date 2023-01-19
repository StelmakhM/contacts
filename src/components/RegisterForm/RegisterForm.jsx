import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";

import FormRow from "../FormRow/FormRow";
export default function RegisterForm() {
	const dispatch = useDispatch();
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const { name, email, password } = form.elements;
		dispatch(
			register({
				name: name.value,
				email: email.value,
				password: password.value,
			})
		);
		form.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormRow name="name" type="text" labelText="Name" />
			<FormRow name="email" type="email" labelText="Email" />
			<FormRow name="password" type="password" labelText="Password" />
			<button type="submit">Submit</button>
		</form>
	);
}

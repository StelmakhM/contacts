import FormRow from "../FormRow/FormRow";
export default function LoginForm() {
	return (
		<form>
			<FormRow name="email" type="email" labelText="Email" />
			<FormRow name="password" type="password" labelText="Password" />
		</form>
	);
}

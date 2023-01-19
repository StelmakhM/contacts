export default function FormRow({ type, name, labelText }) {
	return (
		<>
			<label htmlFor={name}>{labelText}</label>
			<input id={name} type={type} name={name} />
		</>
	);
}

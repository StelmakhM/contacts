import { TextField } from "@mui/material";

export default function FormRow({
	type,
	name,
	labelText,
	onChange = Function.prototype,
}) {
	return (
		<>
			<TextField
				onChange={onChange}
				fullWidth
				label={labelText}
				id={name}
				type={type}
				name={name}
				variant="outlined"
				required
			/>
		</>
	);
}

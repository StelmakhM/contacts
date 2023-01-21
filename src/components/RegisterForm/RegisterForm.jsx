import { Box, Button, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { NavLink as ReactNav } from "react-router-dom";
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
		<Container maxWidth="md" component="main" sx={{ mt: "1em" }}>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					"& > :not(style)": { m: 1, maxWidth: 500 },
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
				}}
				autoComplete="off"
			>
				<Typography variant="h5" component="h2">
					Registration
				</Typography>
				<FormRow name="name" type="text" labelText="Name" />
				<FormRow name="email" type="email" labelText="Email" />
				<FormRow name="password" type="password" labelText="Password" />
				<Button
					type="submit"
					variant="contained"
					fullWidth
					size="large"
				>
					Submit
				</Button>
				<Box>
					<Typography
						component="span"
						variant="body1"
						sx={{ mr: "10px" }}
					>
						Already a member?
					</Typography>
					<Link
						to="/login"
						component={ReactNav}
						underline="none"
						variant="body1"
					>
						Login
					</Link>
				</Box>
			</Box>
		</Container>
	);
}

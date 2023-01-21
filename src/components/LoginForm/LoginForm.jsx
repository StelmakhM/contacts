import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import { NavLink as ReactNav } from "react-router-dom";
import { logIn } from "../../redux/auth/authOperations";
import FormRow from "../FormRow/FormRow";
import { Box, Button, Link, Typography } from "@mui/material";

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
					LogIn
				</Typography>
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
						Not a member yet?
					</Typography>
					<Link
						to="/register"
						component={ReactNav}
						underline="none"
						variant="body1"
					>
						Register
					</Link>
				</Box>
			</Box>
		</Container>
	);
}

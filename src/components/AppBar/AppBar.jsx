import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AppBar, Box, Toolbar } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Container } from "@mui/system";

export default function AppBa() {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container maxWidth="md">
					<Toolbar
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								color: "inherit",
							}}
						>
							<ContactPhoneIcon
								fontSize="large"
								color="text-color"
							/>
							<Navigation />
						</Box>

						{isLoggedIn ? <UserMenu /> : <AuthNav />}
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

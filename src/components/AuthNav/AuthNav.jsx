import { NavLink as ReactNav } from "react-router-dom";
import { ListItem, ListItemText, ListItemButton, List } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
export default function AuthNav() {
	return (
		<List sx={{ display: "flex" }}>
			<ListItem>
				<ListItemButton
					to="/register"
					component={ReactNav}
					sx={{
						"&.active": {
							color: "black",
						},
					}}
				>
					<ListItemText primary="Register" />
					<HowToRegIcon sx={{ pl: "5px" }} />
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton
					to="/login"
					component={ReactNav}
					sx={{
						"&.active": {
							color: "black",
						},
					}}
				>
					<ListItemText primary="Login" />
					<LoginIcon sx={{ pl: "5px" }} />
				</ListItemButton>
			</ListItem>
		</List>
	);
}

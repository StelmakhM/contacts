import {
	ListItem,
	ListItemText,
	ListItemButton,
	List,
	ListItemIcon,
} from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink as ReactNav } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default function Navigation() {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<>
			<List sx={{ display: "flex" }}>
				<ListItem>
					<ListItemButton
						to="/"
						component={ReactNav}
						sx={{
							"&.active": {
								color: "black",
							},
						}}
					>
						<ListItemText primary="Home" />
					</ListItemButton>
				</ListItem>
				{isLoggedIn && (
					<ListItem>
						<ListItemButton
							to="contacts"
							component={ReactNav}
							sx={{
								"&.active": {
									color: "black",
								},
							}}
						>
							<ListItemText primary="Contacts" />
						</ListItemButton>
					</ListItem>
				)}
			</List>
		</>
	);
}

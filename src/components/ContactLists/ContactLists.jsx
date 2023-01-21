import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsOperations";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Avatar,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import stringAvatar from "../../utils/contactAvatar";

export default function ContactList() {
	const contacts = useSelector((state) => state.contacts.contacts);
	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	if (!contacts) return;

	const normalizeValue = (value) => value.toLowerCase().trim();
	const visibleContacts = contacts.filter((contact) =>
		normalizeValue(contact.name).includes(normalizeValue(filter))
	);

	return (
		<Grid item xs={12} md={6}>
			<Typography variant="h5" component="h2">
				My Phonebook
			</Typography>
			<List>
				{visibleContacts.map(({ id, name, number }) => (
					<ListItem
						key={id}
						secondaryAction={
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => dispatch(removeContact(id))}
							>
								<DeleteIcon />
							</IconButton>
						}
					>
						<ListItemAvatar>
							<Avatar {...stringAvatar(name)} />
						</ListItemAvatar>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</Grid>
	);
}

{
	/* <ul>
				{rows.map(({ id, name, number }) => (
					<li key={id}>
						{name},<br />
						{number}
						<button
							onClick={() => dispatch(removeContact(id))}
							type="button"
						>
							Delete
						</button>
					</li>
				))}
			</ul> */
}

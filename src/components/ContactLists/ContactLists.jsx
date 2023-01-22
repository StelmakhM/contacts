import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsOperations";
import stringAvatar from "../../utils/ContactAvatar/contactAvatar";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import {
	Avatar,
	Card,
	CardContent,
	IconButton,
	Typography,
} from "@mui/material";
import {
	selectContacts,
	selectFilterValue,
} from "../../redux/contacts/contactsSelectors";

export default function ContactList() {
	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectFilterValue);
	const dispatch = useDispatch();

	if (!contacts) return;

	const normalizeValue = (value) => value.toLowerCase().trim();
	const visibleContacts = contacts.filter((contact) =>
		normalizeValue(contact.name).includes(normalizeValue(filter))
	);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: " center",
					justifyContent: "center",
					gap: "1em",
					mb: "0.6em",
					mt: "0.4em",
				}}
			>
				<Typography variant="h5" component="h2">
					My Phonebook
				</Typography>
				<ImportContactsIcon fontSize="large" color="primary" />
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: "1em",
					alignItems: "center",
					width: "100%",
					minWidth: "280px",
				}}
			>
				{visibleContacts.map(({ id, name, number }) => (
					<Card
						key={id}
						sx={{
							width: "100%",
						}}
					>
						<CardContent
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Avatar {...stringAvatar(name)} />
							<Box
								sx={{
									ml: "1em",
								}}
							>
								<Typography>{name}</Typography>
								<Typography>{number}</Typography>
							</Box>
							<IconButton
								sx={{
									ml: "auto",
								}}
								edge="end"
								aria-label="delete"
								onClick={() => dispatch(removeContact(id))}
							>
								<DeleteIcon />
							</IconButton>
						</CardContent>
					</Card>
				))}
			</Box>
		</>
	);
}

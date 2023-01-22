import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsOperations";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Avatar,
	Card,
	CardContent,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import stringAvatar from "../../utils/contactAvatar";
import { Grid3x3Outlined } from "@mui/icons-material";

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
		<>
			<Typography
				variant="h5"
				component="h2"
				sx={{
					mb: "0.6em",
					mt: "0.4em",
				}}
			>
				My Phonebook
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: "1em",
					alignItems: "center",
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

//    <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// <ListItem
// 						sx={{
// 							flexWrap: "wrap",
// 						}}
// 						key={id}
// 						secondaryAction={
// 							<IconButton
// 								edge="end"
// 								aria-label="delete"
// 								onClick={() => dispatch(removeContact(id))}
// 							>
// 								<DeleteIcon />
// 							</IconButton>
// 						}
// 					>
// 						<ListItemAvatar>
// 							<Avatar {...stringAvatar(name)} />
// 						</ListItemAvatar>
// 						<ListItemText primary={name} />
// 						<ListItemText primary={number} />
// 					</ListItem>

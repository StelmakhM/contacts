import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { addContact } from "../../redux/contacts/contactsOperations";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { NavLink as ReactNav } from "react-router-dom";
import FormRow from "../FormRow/FormRow";

export default function ContactForm() {
	const dispatch = useDispatch();
	const contacts = useSelector((state) => state.contacts.contacts);
	const normalizeValue = (value) => value.toLowerCase().trim();

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.elements.name.value;
		const number = form.elements.number.value;
		const exist = contacts.some(
			(contact) => normalizeValue(contact.name) === normalizeValue(name)
		);
		if (exist) {
			Notify.info("This contact is already in list");
			return;
		}
		dispatch(
			addContact({
				name,
				number,
			})
		);
		form.reset();
	};

	return (
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
				Add contact
			</Typography>
			<FormRow name="name" type="text" labelText="Name" />
			<FormRow name="number" type="tel" labelText="Phone number" />
			<Button type="submit" variant="contained" fullWidth size="large">
				Add contact
			</Button>
		</Box>
	);
}

import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactLists/ContactLists";
import Filter from "../components/Filter/Filter";
import { fetchContacts } from "../redux/contacts/contactsOperations";

export default function Contacts() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, []);

	return (
		<Container
			maxWidth="md"
			component="main"
			sx={{
				m: "1em auto",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: {
					sm: "space-between",
					xs: "center",
				},
			}}
		>
			<Box width="40%" minWidth="250px">
				<ContactForm />
				<Filter />
			</Box>
			<Box>
				<ContactList />
			</Box>
		</Container>
	);
}

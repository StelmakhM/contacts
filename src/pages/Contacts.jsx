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
		<main>
			<ContactForm />
			<Filter />
			<ContactList />
		</main>
	);
}

import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsOperations";

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
			<ul>
				{visibleContacts.map(({ id, name, number }) => (
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
			</ul>
		</>
	);
}

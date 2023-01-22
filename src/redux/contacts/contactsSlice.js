import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/authOperations";
import { fetchContacts, addContact, removeContact } from "./contactsOperations";

const initialState = {
	contacts: [],
	isLoading: false,
	error: null,
};

const handlePending = (state) => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, handlePending)
			.addCase(addContact.pending, handlePending)
			.addCase(removeContact.pending, handlePending)
			.addCase(fetchContacts.rejected, handleRejected)
			.addCase(addContact.rejected, handleRejected)
			.addCase(removeContact.rejected, handleRejected)
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.contacts = action.payload;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.contacts.push(action.payload);
				state.isLoading = false;
				state.error = null;
			})
			.addCase(removeContact.fulfilled, (state, action) => {
				state.contacts = state.contacts.filter(
					(contact) => contact.id !== action.payload.id
				);
				state.isLoading = false;
				state.error = null;
			})
			.addCase(logOut.fulfilled, (state) => {
				state.contacts = [];
				state.isLoading = false;
				state.error = null;
			});
	},
});

export const contactsReducer = contactsSlice.reducer;

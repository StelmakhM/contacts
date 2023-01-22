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
	extraReducers: {
		[fetchContacts.pending]: handlePending,
		[addContact.pending]: handlePending,
		[removeContact.pending]: handlePending,
		[fetchContacts.rejected]: handleRejected,
		[addContact.rejected]: handleRejected,
		[removeContact.rejected]: handleRejected,
		[fetchContacts.fulfilled](state, action) {
			state.contacts = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		[addContact.fulfilled](state, action) {
			state.contacts.push(action.payload);
			state.isLoading = false;
			state.error = null;
		},
		[removeContact.fulfilled](state, action) {
			state.contacts = state.contacts.filter(
				(contact) => contact.id !== action.payload.id
			);
			state.isLoading = false;
			state.error = null;
		},
		[logOut.fulfilled](state) {
			state.contacts = [];
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const contactsReducer = contactsSlice.reducer;

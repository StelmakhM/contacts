import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
	"contacts/fetch",
	async (_, thunkAPI) => {
		try {
			const response = await axios("/contacts");
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thunkAPI) => {
		try {
			const response = await axios.post("/contacts", contact);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

export const removeContact = createAsyncThunk(
	"contacts/removeContact",
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

export const updateContact = createAsyncThunk(
	"contacts/updateContact",
	async (data, thunkAPI) => {
		try {
			const response = await axios.patch(
				`/contacts/${data.id}`,
				data.info
			);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

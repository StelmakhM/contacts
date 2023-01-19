import { authSliceReducer } from "./auth/authSlice";
import { contactsReducer } from "./contacts/contactsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
	reducer: {
		auth: authSliceReducer,
		contacts: contactsReducer,
	},
});

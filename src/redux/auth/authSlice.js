import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOperations";

const initialState = {
	user: { name: null, email: null, password: null },
	token: null,
	isLoggedIn: false,
	isLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			console.log(action);
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logIn.fulfilled]: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logOut.fulfilled]: (state, action) => {
			state.user = { user: null, email: null, password: null };
			state.token = action.payload.token;
			state.isLoggedIn = false;
		},
	},
});

export const authSliceReducer = authSlice.reducer;

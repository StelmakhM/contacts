import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com";

axios.defaults.baseURL = BASE_URL;

const setAuthToken = (token) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
	axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
	"auth/register",
	async (userInfo, thunkAPI) => {
		try {
			const response = await axios.post("users/signup", userInfo);
			setAuthToken(response.data.token);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

export const logIn = createAsyncThunk(
	"auth/login",
	async (userInfo, thunkAPI) => {
		try {
			const response = await axios.post("users/login", userInfo);
			setAuthToken(response.data.token);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		const response = await axios.post("users/logout");
		clearAuthToken();
		return response.data;
	} catch (error) {
		thunkAPI.rejectWithValue(error);
	}
});

export const refreshUser = createAsyncThunk(
	"auth/refresh",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.token;

		if (persistedToken === null) {
			return thunkAPI.rejectWithValue("Unable to fetch user");
		}

		try {
			setAuthToken(persistedToken);
			const response = await axios("users/current");
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

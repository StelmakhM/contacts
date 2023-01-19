import React from "react";
import { Outlet } from "react-router";
import AppBar from "../AppBar/AppBar";

export default function SharedLayout() {
	return (
		<>
			<AppBar />
			<Outlet />
		</>
	);
}

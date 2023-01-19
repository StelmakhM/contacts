import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";

export default function SharedLayout() {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
}

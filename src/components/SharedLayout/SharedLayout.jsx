import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBar from "../AppBar/AppBar";

export default function SharedLayout() {
	return (
		<>
			<AppBar />
			<Suspense>
				<Outlet />
			</Suspense>
		</>
	);
}

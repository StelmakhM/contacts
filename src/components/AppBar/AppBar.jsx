import React from "react";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

export default function AppBar() {
	const { isLoggedIn } = useSelector((state) => state.auth);
	return (
		<header>
			<nav>
				<ul>
					<Navigation />
					{isLoggedIn ? <UserMenu /> : <AuthNav />}
				</ul>
			</nav>
		</header>
	);
}

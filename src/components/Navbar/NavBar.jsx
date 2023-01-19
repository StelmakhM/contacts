import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/register">SignIn/SignUp</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

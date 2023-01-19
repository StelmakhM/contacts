import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/contacts">Contacts</Link>
			</li>
		</>
	);
}

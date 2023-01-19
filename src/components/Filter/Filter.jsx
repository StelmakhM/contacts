import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/filterSlice";

export default function Filter() {
	const dispatch = useDispatch();
	const handleFilter = (e) => {
		dispatch(setFilter(e.target.value));
	};

	return (
		<>
			<h2>Contacts</h2>
			<label>
				Enter search query
				<input
					type="text"
					name="filter"
					onChange={(e) => handleFilter(e)}
				/>
			</label>
		</>
	);
}

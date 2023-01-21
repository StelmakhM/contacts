import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/filterSlice";
import FormRow from "../FormRow/FormRow";

export default function Filter() {
	const dispatch = useDispatch();
	const handleFilter = (e) => {
		dispatch(setFilter(e.target.value));
	};

	return (
		<>
			<Typography
				variant="h5"
				component="h2"
				sx={{ m: "0.5em 0", textAlign: "center" }}
			>
				Search contact
			</Typography>
			<FormRow
				name="filter"
				type="text"
				labelText="Enter contact name"
				onChange={handleFilter}
			/>
		</>
	);
}

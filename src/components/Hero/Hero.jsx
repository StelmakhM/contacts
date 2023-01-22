import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ContactsImage from "../../images/ContactsImage";

export default function Hero() {
	return (
		<Container
			maxWidth="md"
			sx={{
				textAlign: " center",
			}}
		>
			<Typography
				sx={{
					m: "0.7em",
					fontSize: {
						md: "40px",
						sm: "32px",
						xs: "20px",
					},
				}}
			>
				Your personal phonebook
			</Typography>
			<ContactsImage />
		</Container>
	);
}

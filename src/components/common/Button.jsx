import React from "react";
import { TextField, Card, Box } from "@mui/material";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";

export default function CustomButton(props) {
	const { onClick, variant, className, loading, disabled, children, rest } =
		props;
	return (
		<>
			<Button
				disabled={disabled}
				onClick={onClick}
				variant={variant}
				className={className}
				fullWidth
				{...rest}
			>
				{loading ? <CircularProgress size={20} /> : children}
			</Button>
		</>
	);
}

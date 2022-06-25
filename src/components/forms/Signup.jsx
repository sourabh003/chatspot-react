import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../common/Button";
import { TextField, Card, Box, Typography } from "@mui/material";
import classnames from "classnames";
import { toast } from "react-toastify";

export default function Signup() {
	// States
	const [formValues, setFormValues] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	// Handlers
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onSubmit = () => {
		const { password, cPassword } = formValues;
		if (password !== cPassword) {
			toast.error("Password doesn't match");
			console.log(formValues);
			return;
		}
	};

	return (
		<Card className="form-container">
			<Box className="form">
				<TextField
					className="custom-input"
					name="name"
					label="Name"
					variant="filled"
					value={formValues.name || ""}
					onChange={handleChange}
				/>
				<TextField
					className="custom-input"
					name="email"
					label="Email"
					variant="filled"
					type={"email"}
					value={formValues.email || ""}
					onChange={handleChange}
				/>
				<TextField
					className="custom-input"
					name="phone"
					label="Phone (Optional)"
					variant="filled"
					type={"tel"}
					inputProps={{ maxLength: 10 }}
					value={formValues.phone || ""}
					onChange={handleChange}
				/>
				<TextField
					className="custom-input"
					name="password"
					label="Password"
					variant="filled"
					type={"password"}
					value={formValues.password || ""}
					onChange={handleChange}
				/>
				<TextField
					className="custom-input"
					name="cPassword"
					label="Confirm Password"
					variant="filled"
					type={"password"}
					value={formValues.cPassword || ""}
					onChange={handleChange}
				/>
				<Button
					disabled={isLoading}
					loading={isLoading}
					className={classnames("custom-button", "secondary-button")}
					variant="contained"
					onClick={onSubmit}
				>
					Signup
				</Button>
				<hr />
				<Box fullWidth display={"flex"} justifyContent="center">
					<Typography className="form-text" variant="body">
						Don't have an account ? <Link to="/login">Login</Link>{" "}
					</Typography>
				</Box>
			</Box>
		</Card>
	);
}

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../common/Button";
import { TextField, Card, Box, Typography } from "@mui/material";
import { userLogin } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function Signup() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// States
	const [formValues, setFormValues] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	// Handlers
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onSubmit = () => {
		setIsLoading(true);
		dispatch(userLogin(formValues))
			.then((res) => {
				toast.success(res);
				navigate("/home");
			})
			.catch((err) => {
				toast.error(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Card className="form-container">
			<Box className="form">
				<TextField
					className="custom-input"
					name="email"
					label="Email"
					variant="filled"
					value={formValues.email || ""}
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
				<Button
					disabled={isLoading}
					loading={isLoading}
					className="custom-button"
					variant="contained"
					onClick={onSubmit}
				>
					Login
				</Button>
				<hr />
				<Box fullWidth display={"flex"} justifyContent="center">
					<Typography className="form-text" variant="body">
						Don't have an account ? <Link to="/signup">Signup</Link>{" "}
					</Typography>
				</Box>
			</Box>
		</Card>
	);
}

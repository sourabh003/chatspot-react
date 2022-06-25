import React, { useEffect } from "react";
import Login from "../forms/Login";
import Signup from "../forms/Signup";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthPage(props) {
	const { isLoggedIn = false } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (isLoggedIn) {
			navigate("/home");
		}
	}, [isLoggedIn]);

	const { login } = props;
	return (
		<Grid item className="authpage-container">
			{login ? <Login /> : <Signup />}
		</Grid>
	);
}

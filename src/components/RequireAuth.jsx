import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
	// @ts-ignore
	const { isLoggedIn = false } = useSelector((state) => state.auth);
	let location = useLocation();

	useEffect(() => {
		console.log({ isLoggedIn });
	}, []);

	if (!isLoggedIn) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return <Outlet />;
}

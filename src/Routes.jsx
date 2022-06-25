import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./components/pages/AuthPage";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/wrapper/Layout";
import HomePage from "./components/pages/HomePage";

export default function CustomRoutes() {
	return (
		<Routes>
			<Route path="/login" element={<AuthPage login />} />
			<Route path="/signup" element={<AuthPage />} />
			<Route element={<RequireAuth />}>
				<Route element={<Layout />}>
					<Route path="/" element={<Navigate to={"/home"} />} />
					<Route path="/home" element={<HomePage />} />
				</Route>
			</Route>
		</Routes>
	);
}

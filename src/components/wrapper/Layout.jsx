import Header from "./Header";
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./Footer";

export default function Layout() {
	return (
		<Box>
			<Header />
			<Outlet />
			<Footer />
		</Box>
	);
}

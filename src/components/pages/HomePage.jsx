import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
	const { user } = useSelector((state) => state.auth);
	return <div>{user.name}</div>;
}

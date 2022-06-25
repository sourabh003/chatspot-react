import React from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function SocketWrapper() {
	const socket = io("ws://localhost:4000", {
		path: "/test",
	});

	return null;
}

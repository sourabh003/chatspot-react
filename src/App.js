import React, { useEffect } from "react";
import SocketWrapper from "./components/SocketWrapper";
import CustomRoutes from "./Routes";
import "./styles/index.scss";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./utils/methods";
import { LOCAL_USER } from "./utils/constants";
import { setUser } from "./redux/actions/auth";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const user = getData(LOCAL_USER);
		if (user) {
			dispatch(setUser(user));
		}
	}, []);

	return (
		<Box>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<CustomRoutes />
		</Box>
	);
}

export default App;

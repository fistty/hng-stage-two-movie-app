import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<>
			<Outlet />
		</>
	);
}

export default RootLayout;

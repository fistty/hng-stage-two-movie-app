import React, { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<>
			<h1>This will show everywhere</h1>
			<Outlet />
		</>
	);
}

export default RootLayout;

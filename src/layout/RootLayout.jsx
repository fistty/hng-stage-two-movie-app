import React, { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<main>
			<h1>This will show everywhere</h1>
			<Outlet />
		</main>
	);
}

export default RootLayout;

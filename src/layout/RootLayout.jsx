import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useMovieContext } from "../context/useMovieContext";
import { Overlay } from "../components/Overlay";

function RootLayout() {
	const { isOverlay } = useMovieContext();

	return (
		<>
			<Outlet />
		</>
	);
}

export default RootLayout;

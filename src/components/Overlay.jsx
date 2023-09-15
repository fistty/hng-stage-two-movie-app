import React from "react";
import "./Overlay.css";
import { useMovieContext } from "../context/useMovieContext";

export const Overlay = () => {
	const { setIsOverlay } = useMovieContext();
	return <div className="overlay" onClick={() => setIsOverlay(false)}></div>;
};

import React, { useEffect } from "react";
import { Logo } from "./Logo";
import { useLocation } from "react-router-dom";
import "./SideBar.css";

export const SideBar = () => {
	const loc = useLocation();
	useEffect(() => {
		console.log(loc);
		console.log(2);
	});
	return (
		<div className="side-bar">
			<Logo />
		</div>
	);
};

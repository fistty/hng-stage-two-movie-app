import React, { useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { useLocation } from "react-router-dom";
import { SideLinks } from "./SideLinks";
import "./SideBar.css";

export const SideBar = () => {
	const location = useLocation();

	useEffect(() => {
		console.log(location);
	});
	return (
		<div className="side-bar">
			<Logo />
			<SideLinks />
		</div>
	);
};

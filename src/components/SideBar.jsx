import React, { useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { SideLinks } from "./SideLinks";
import "./SideBar.css";

export const SideBar = () => {
	return (
		<div className="side-bar">
			<Logo />
			<SideLinks />
		</div>
	);
};

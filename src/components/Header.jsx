import React from "react";
import Nav from "./Nav";
import "./Header.css";
import { DescriptionBox } from "./DescriptionBox";

function Header() {
	return (
		<header>
			<div className="header-container">
				<Nav />
				<DescriptionBox />
			</div>
		</header>
	);
}

export default Header;

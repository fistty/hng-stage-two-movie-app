import React from "react";
import Search from "./Search";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export const Nav = () => {
	return (
		<nav className="nav">
			<Logo />
			<Search />
			<Menu />
		</nav>
	);
};

export default Nav;

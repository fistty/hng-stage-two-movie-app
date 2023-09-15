import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import SearchInput from "./SearchInput";

export const Nav = () => {
	return (
		<nav className="nav">
			<Logo />
			<SearchInput />
			<Menu />
		</nav>
	);
};

export default Nav;

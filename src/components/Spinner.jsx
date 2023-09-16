import React from "react";
import "./Spinner.css";

export const Spinner = () => {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

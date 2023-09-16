import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const MovieError = () => {
	const error = useRouteError();
	return (
		<div>
			<h1>Error</h1>
			<p>{error.message}</p>
			<Link to="/">Back to Homepage</Link>
		</div>
	);
};

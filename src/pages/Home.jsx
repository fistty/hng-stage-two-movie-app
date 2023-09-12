import React, { useEffect } from "react";
import { useMovieContext } from "../context/useMovieContext";

function Home() {
	const { first, moviesList } = useMovieContext();

	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log(moviesList);
	// 	}, 2000);
	// }, []);

	return (
		<div>
			<p>This is Homepage {"=> " + first}</p>
			<pre> {JSON.stringify(moviesList, null, 2)} </pre>
		</div>
	);
}

export default Home;

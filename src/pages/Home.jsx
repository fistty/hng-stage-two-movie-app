import React, { useEffect } from "react";
import { useMovieContext } from "../context/useMovieContext";
import Heading from "../components/Heading";

function Home() {
	const { moviesList } = useMovieContext();

	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log(moviesList);
	// 	}, 2000);
	// }, []);

	return (
		<>
			<Heading />
			{/* <pre> {JSON.stringify(moviesList, null, 2)} </pre> */}
		</>
	);
}

export default Home;

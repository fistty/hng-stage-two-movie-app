import React, { useEffect } from "react";
import { useMovieContext } from "../context/useMovieContext";
import Heading from "../components/Heading";
import "./Home.css";

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
		</>
	);
}

export default Home;

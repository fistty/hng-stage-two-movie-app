import React, { useEffect } from "react";
import { useMovieContext } from "../context/useMovieContext";
import Header from "../components/Header";
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
			<Header />
			<main>{/* <TopMovies /> */}</main>
		</>
	);
}

export default Home;

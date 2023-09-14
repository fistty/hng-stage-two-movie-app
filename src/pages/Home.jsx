import React, { useEffect } from "react";
import { useMovieContext } from "../context/useMovieContext";
import Header from "../components/Header";
import { MovieList } from "../components/MovieList";
import "./Home.css";

function Home() {
	const { moviesList } = useMovieContext();
	useEffect(() => {
		console.log(moviesList);
	}, []);
	return (
		<>
			<Header />
			<main className="main">
				<h1 className="h1">Top Movies</h1>
				<MovieList />
			</main>
		</>
	);
}

export default Home;

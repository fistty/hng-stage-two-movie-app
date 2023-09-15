import React from "react";
import Header from "../components/Header";
import { MovieList } from "../components/MovieList";
import "./Home.css";

function Home() {
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

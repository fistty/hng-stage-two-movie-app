import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import { MovieInfo } from "../components/MovieInfo";
import "./MovieDetails.css";

export const MovieDetail = () => {
	const [queriedMovie, setQueriedMovie] = useState([]);
	return (
		<main className="movie-details">
			<SideBar />
			<section className="movie-details-section">
				<div className="empty"></div>
				<MovieInfo />
			</section>
		</main>
	);
};

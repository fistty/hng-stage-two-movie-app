import React, { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { MovieInfo } from "../components/MovieInfo";
import "./MovieDetails.css";
import { useLoaderData } from "react-router-dom";
import { getMovieDetails } from "../helpers/api";
import { useMovieContext } from "../context/useMovieContext";

export const MovieDetail = () => {
	const movieId = useLoaderData();
	const { setMovieDetailArr } = useMovieContext();

	useEffect(() => {
		getMovieDetails(movieId, setMovieDetailArr);
	}, [movieId]);
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

import React from "react";
import { findGenre } from "../helpers/genre";

export const MovieCard = ({ movie }) => {
	const baseImageUrl = "https://image.tmdb.org/t/p/w185";
	const width = "w92, w154, w185, w342, w500,w780";

	return (
		<div className="movie-card" data-testid="movie-card">
			<div className="movie-poster">
				<img src={`${baseImageUrl}/${movie.poster_path}`} alt="movie-poster" />
			</div>
			<div className="movie-loc-year">
				<p>USA, 1992</p>
			</div>
			<div className="movie-title">
				<h2>{movie.title}</h2>
			</div>
			<div className="movie-ratings">
				<div className="imdb">97</div> <div className="tomato">90</div>
			</div>
			<div className="movie-genre">{<p>{findGenre(movie.genre_ids)}</p>}</div>
		</div>
	);
};

import React from "react";
import { getGenre } from "../helpers/getGenre";
import { getDate } from "../helpers/getDate";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
	const baseImageUrl = "https://image.tmdb.org/t/p/w185";
	let width = "w92, w154, w185, w342, w500,w780, w1280";

	return (
		<Link
			to={`/movies/${movie.id}`}
			className="movie-card"
			data-testid="movie-card"
		>
			<div className="movie-poster">
				<img
					src={`${baseImageUrl}/${movie.poster_path}`}
					alt={`${movie.title} image`}
					data-testid="movie-poster"
				/>
			</div>
			<div className="movie-loc-year">
				<p> USA</p>
				<p data-testid="movie-release-date">{getDate(movie.release_date)}</p>
			</div>
			<div className="movie-title" data-testid="movie-title">
				<h2>{movie.title}</h2>
			</div>
			{/* <div className="movie-ratings">
				<div className="imdb">97</div> <div className="tomato">90</div>
			</div> */}
			<div className="movie-genre">{<p>{getGenre(movie.genre_ids)}</p>}</div>
		</Link>
	);
};

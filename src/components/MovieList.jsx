import React from "react";
import { useMovieContext } from "../context/useMovieContext";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
	const { moviesList } = useMovieContext();

	return (
		<div className="movie-list">
			{moviesList?.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};

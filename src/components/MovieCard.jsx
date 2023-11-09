import { getGenre } from "../helpers/getGenre";
import { getDate } from "../helpers/getDate";
import { Link } from "react-router-dom";
import { getImages } from "../helpers/getImages";
import starSvg from "../../assets/star.svg";
import "./MovieCard.css";
import { getRatings } from "./getRatings";
export const MovieCard = ({ movie }) => {
	// let width = "w92, w154, w185, w342, w500,w780, w1280";

	return (
		<Link
			to={`/movies/${movie.id}`}
			className="movie-card"
			data-testid="movie-card"
		>
			<div className="movie-poster">
				<img
					src={getImages(movie.poster_path)}
					alt={`${movie.title} image`}
					data-testid="movie-poster"
				/>
			</div>
			<div className="movie-loc-year">
				<p>{movie.original_language}</p>
				<p data-testid="movie-release-date">{getDate(movie.release_date)}</p>
			</div>
			<div className="movie-title" data-testid="movie-title">
				<h2>{movie.title}</h2>
			</div>
			<div className="movie-vote">
				<img src={starSvg} alt="rating image" />
				<p className="movie-vote-p">
					{movie?.vote_average !== undefined ? getRatings(movie.vote_average) : "-"}
				</p>
			</div>
			<div className="movie-genre">{<p>{getGenre(movie.genre_ids)}</p>}</div>
		</Link>
	);
};

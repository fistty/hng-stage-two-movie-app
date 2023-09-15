import React from "react";
import { MovieBackdrop } from "./MovieBackdrop";
import ticketSvg from "../../assets/two-tickets.svg";
import listSvg from "../../assets/list.svg";
import starSvg from "../../assets/star.svg";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/useMovieContext";
import { getRatings } from "./getRatings";
import "./MovieInfo.css";

export const MovieInfo = ({ imagePosterURL }) => {
	const { movieDetailArr } = useMovieContext();

	console.log(movieDetailArr);

	return (
		<div className="movie-info">
			<MovieBackdrop imagePosterURL={imagePosterURL} />
			<div className="movie-description">
				<div className="first-div">
					<div className="info">
						<div className="movie-title">
							<p data-testid="movie-title">{`${movieDetailArr?.title} • `}</p>
							<p data-testid="movie-release-date">
								{movieDetailArr?.release_date
									? `${new Date(movieDetailArr?.release_date)
											.toUTCString()
											.slice(0, 17)} • `
									: "Not Released • "}
							</p>
							<p data-testid="movie-runtime">{`${movieDetailArr?.runtime}m`}</p>
						</div>
						<div className="movie-info-genre">
							{movieDetailArr?.genres?.map((gnr) => (
								<p key={gnr.id}>{gnr.name}</p>
							))}
						</div>
					</div>

					<div className="movie-text">
						<p data-testid="movie-overview">{movieDetailArr?.overview}</p>
					</div>
					<div className="movie-top">
						<Link to="/">View Top rated movies</Link>
					</div>
				</div>
				<div className="second-div">
					<div className="movie-rating">
						<img src={starSvg} alt="rating image" />
						<p className="movie-rating-average">
							{movieDetailArr?.vote_average !== undefined
								? getRatings(movieDetailArr.vote_average)
								: "-"}
						</p>
						{/* <p className="movie-rating-average">
							{getRatings(movieDetailArr.vote_average)}
						</p> */}
						<p className="movie-rating-count">
							{movieDetailArr?.vote_average !== undefined
								? getRatings(movieDetailArr.vote_average, "count")
								: "-"}
						</p>
					</div>
					<div className="movie-showtimes ">
						<button className="first second-div-button">
							<img src={ticketSvg} alt="" />
							See Showtime
						</button>
					</div>
					<div className="movie-more ">
						<button className="second second-div-button">
							<img src={listSvg} alt="" />
							More watch options
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

import React, { useEffect } from "react";
import { MovieBackdrop } from "./MovieBackdrop";
import ticketSvg from "../../assets/two-tickets.svg";
import listSvg from "../../assets/list.svg";
import starSvg from "../../assets/star.svg";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/useMovieContext";
import { getRatings } from "./getRatings";

export const MovieInfo = ({ imagePosterURL }) => {
	const { movieDetailArr } = useMovieContext();

	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

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
					{/* DUPLICATED  FOR RESPONSIVENESS*/}
					<div className="movie-rating first">
						<img src={starSvg} alt="rating image" />
						<p className="movie-rating-average">
							{movieDetailArr?.vote_average !== undefined
								? getRatings(movieDetailArr.vote_average)
								: "-"}
						</p>
						<p className="movie-rating-count">
							{movieDetailArr?.vote_average !== undefined
								? getRatings(movieDetailArr.vote_average, "count")
								: "-"}
						</p>
					</div>

					{/* DUPLICATED  FOR RESPONSIVENESS*/}
					<div className="movie-showtimes first">
						<button className="first second-div-button">
							<img src={ticketSvg} alt="" />
							See Showtime
						</button>
					</div>
					<div className="movie-more first">
						<button className="second second-div-button">
							<img src={listSvg} alt="" />
							More watch options
						</button>
					</div>

					<div className="movie-text">
						<p data-testid="movie-overview">{movieDetailArr?.overview}</p>
					</div>
					{movieDetailArr?.homepage ? (
						<p className="movie-website">
							Website :
							<a href={movieDetailArr?.homepage} target="_blank">
								{movieDetailArr?.homepage}
							</a>
						</p>
					) : null}
					{movieDetailArr?.original_language ? (
						<p className="movie-language">
							Language:
							<span className="second-p">{movieDetailArr?.original_language}</span>
						</p>
					) : null}
					{movieDetailArr?.tagline ? (
						<p className="movie-tagline">
							Movie Tagline:
							<span className="second-p">{movieDetailArr?.tagline}</span>
						</p>
					) : null}
					<div className="movie-top">
						<Link to="/">View Top rated movies</Link>
					</div>
				</div>
				<div className="second-div">
					<div className="movie-rating second">
						<img src={starSvg} alt="rating image" />
						<p className="movie-rating-average">
							{movieDetailArr?.vote_average !== undefined
								? getRatings(movieDetailArr.vote_average)
								: "-"}
						</p>
						<p className="movie-rating-count">
							{movieDetailArr?.vote_average !== undefined
								? getRatings(movieDetailArr.vote_average, "count")
								: "-"}
						</p>
					</div>
					<div className="movie-showtimes second">
						<button className="first second-div-button">
							<img src={ticketSvg} alt="" />
							See Showtime
						</button>
					</div>
					<div className="movie-more second">
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

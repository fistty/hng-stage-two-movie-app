import React, { useEffect } from "react";
import { MovieBackdrop } from "./MovieBackdrop";
import ticketSvg from "../../assets/two-tickets.svg";
import listSvg from "../../assets/list.svg";
import starSvg from "../../assets/star.svg";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/useMovieContext";
import "./MovieInfo.css";

export const MovieInfo = () => {
	const { movieDetailArr } = useMovieContext();
	useEffect(() => {
		console.log(movieDetailArr);
	}, []);

	return (
		<div className="movie-info">
			<MovieBackdrop />
			<div className="movie-description">
				<div className="first-div">
					<div className="movie-title">
						<p>{`${movieDetailArr.title} • `}</p>
						<p>{`${new Date(movieDetailArr.release_date).toUTCString()}`} </p>
						<p> {`${movieDetailArr.runtime} minutes`} </p>
					</div>
					<div className="movie-text">
						<p>
							After thirty years, Maverick is still pushing the envelope as a top naval
							aviator, but must confront ghosts of his past when he leads TOP GUN's
							elite graduates on a mission that demands the ultimate sacrifice from
							those chosen to fly it.
						</p>
					</div>
					<div className="movie-top">
						<Link to="/">View Top rated movies</Link>
					</div>
				</div>
				<div className="second-div">
					<div className="movie-rating">
						<img src={starSvg} alt="rating image" />
						<p className="movie-rating-average">8.5</p>
						<p className="movie-rating-count">| 350k</p>
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

import React from "react";
import { MovieBackdrop } from "./MovieBackdrop";
import ticketSvg from "../../assets/two-tickets.svg";
import listSvg from "../../assets/list.svg";
import starSvg from "../../assets/star.svg";
import "./MovieInfo.css";

export const MovieInfo = () => {
	return (
		<div className="movie-info">
			<MovieBackdrop />
			<div className="movie-description">
				<div className="first-div">
					<div className="movie-title">
						<p>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</p>
					</div>
					<div className="movie-text">
						<p>
							After thirty years, Maverick is still pushing the envelope as a top naval
							aviator, but must confront ghosts of his past when he leads TOP GUN's
							elite graduates on a mission that demands the ultimate sacrifice from
							those chosen to fly it.
						</p>
					</div>
				</div>
				<div className="second-div">
					<div className="movie-rating">
						<img src={starSvg} alt="rating image" />
						<p className="movie-rating-average">8.5</p>
						<p className="movie-rating-count">|350k</p>
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

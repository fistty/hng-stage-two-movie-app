import React from "react";
import playSvg from "../../assets/play.svg";
import "./MovieInfo.css";

export const MovieInfo = () => {
	const base = "https://image.tmdb.org/t/p/w1280";
	return (
		<div classwork="movie-info">
			<div className="movie-backdrop">
				<img
					src={` ${base}/${"/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"}`}
					alt="movie-poster"
				/>
				<div className="play-button">
					<button>
						<img src={playSvg} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

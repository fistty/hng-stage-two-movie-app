import React from "react";
import playSvg from "../../assets/play2.svg";

export const MovieBackdrop = ({ imagePosterURL }) => {
	return (
		<div className="movie-backdrop">
			<img src={` ${imagePosterURL}`} alt="movie-poster" />
			<div className="play-button">
				<button>
					<img src={playSvg} alt="" />
				</button>
			</div>
		</div>
	);
};

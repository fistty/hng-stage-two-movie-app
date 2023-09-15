import React from "react";
import playSvg from "../../assets/play2.svg";
import { getImages } from "../helpers/getImages";

export const MovieBackdrop = ({ imagePosterURL }) => {
	return (
		<div className="movie-backdrop">
			<img
				className={imagePosterURL ? null : "null"}
				src={getImages(imagePosterURL)}
				alt="movie-poster"
			/>
			{imagePosterURL ? (
				<div className="play-button">
					<button>
						<img src={playSvg} alt="" />
					</button>
				</div>
			) : null}
		</div>
	);
};

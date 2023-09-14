import React from "react";
import playSvg from "../../assets/play2.svg";

export const MovieBackdrop = () => {
	const base = "https://image.tmdb.org/t/p/w1280";

	return (
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
	);
};

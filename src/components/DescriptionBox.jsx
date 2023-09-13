import React from "react";
import imdbSvg from "../../assets/imdb.svg";
import rottenTomatoSvg from "../../assets/tomato.svg";
import playSvg from "../../assets/play.svg";

export const DescriptionBox = () => {
	return (
		<div className="description-box-div">
			<div className="description-title">
				<h1>John Wick 3 : Parabellum</h1>
			</div>
			<div className="description-rating">
				<div className="imdb-div">
					<img className="rating-svg" src={imdbSvg} alt="" />
					<div className="rating-score"> 86.0/100</div>
				</div>
				<div className="rotten-div">
					<img className="rating-svg" src={rottenTomatoSvg} alt="" />
					<div className="rating-score"> 97%</div>
				</div>
			</div>
			<div className="description-text">
				<p>
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is the
					target of hit men and women everywhere.
				</p>
			</div>
			<button className="description-button">
				<img src={playSvg} alt="" /> <p>WATCH TRAILER</p>
			</button>
		</div>
	);
};

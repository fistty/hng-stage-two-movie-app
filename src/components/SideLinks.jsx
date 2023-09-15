import React from "react";
import { Link } from "react-router-dom";
import homeSvg from "../../assets/home.svg";
import moviesSvg from "../../assets/movie.svg";
import tvSvg from "../../assets/tv.svg";
import upcomingSvg from "../../assets/upcoming.svg";

export const SideLinks = () => {
	const diabledLinks = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<div className="side-links">
				<ul className="side-links-ul">
					<li className="side-links-li">
						<Link to="/" className="side-links-a">
							<img className="side-links-svg" src={homeSvg} alt="home-link" />
							<p>Home</p>
						</Link>
					</li>
					<li className="side-links-li">
						<Link to="#fd" className="side-links-a active">
							<img className="side-links-svg" src={moviesSvg} alt="movie-link" />
							<p>Movies</p>
						</Link>
					</li>
					<li className="side-links-li">
						<Link onClick={diabledLinks} to="#" className="side-links-a void">
							<img className="side-links-svg" src={tvSvg} alt="tv-link" />
							<p>TV Series</p>
						</Link>
					</li>
					<li className="side-links-li">
						<Link onClick={diabledLinks} to="#" className="side-links-a void">
							<img className="side-links-svg" src={upcomingSvg} alt="upcoming-link" />
							<p>Upcoming</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

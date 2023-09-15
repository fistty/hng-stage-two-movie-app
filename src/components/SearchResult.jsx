import React from "react";
import "./SearchResult.css";
import { useMovieContext } from "../context/useMovieContext";
import { getImages } from "../helpers/getImages";
import { Link } from "react-router-dom";

export const SearchResult = ({ searchText }) => {
	const { querryArr } = useMovieContext();
	return (
		<div className="search-result">
			{searchText.length > 1
				? querryArr.map((query) => (
						<Link to={`movies/${query.id}`} className="search-item" key={query.id}>
							<div className="image-container">
								<img src={getImages(query.poster_path)} alt="movie poster" />
							</div>
							<div className="text-container">
								<p> {query.title} </p>
								<p>{new Date(query.release_date).toUTCString().slice(0, 17)}</p>
							</div>
						</Link>
				  ))
				: null}
		</div>
	);
};

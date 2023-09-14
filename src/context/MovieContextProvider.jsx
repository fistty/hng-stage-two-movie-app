import React, { useState } from "react";
import { MovieContext } from "./MovieContext";

const MovieContextProvider = ({ children }) => {
	const [moviesList, setMoviesList] = useState([]);
	const [movieDetailArr, setMovieDetailArr] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [reload, setReload] = useState(true);
	return (
		<MovieContext.Provider
			value={{ moviesList, setMoviesList, movieDetailArr, setMovieDetailArr }}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;

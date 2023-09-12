import React, { useState } from "react";
import { MovieContext } from "./MovieContext";

const MovieContextProvider = ({ children }) => {
	const [moviesList, setMoviesList] = useState([]);
	const [reload, setReload] = useState(true);
	return (
		<MovieContext.Provider
			value={{ moviesList, setMoviesList, reload, setReload }}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;

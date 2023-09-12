import React, { useState } from "react";
import { MovieContext } from "./MovieContext";

const MovieContextProvider = ({ children }) => {
	const [first, setFirst] = useState("second");
	const [moviesList, setMoviesList] = useState([]);
	const [reload, setReload] = useState(true);
	return (
		<MovieContext.Provider
			value={{ first, setFirst, moviesList, setMoviesList, reload, setReload }}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;

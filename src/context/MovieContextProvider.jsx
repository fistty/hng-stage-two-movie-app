import React, { useState } from "react";
import { MovieContext } from "./MovieContext";

const MovieContextProvider = ({ children }) => {
	const [moviesList, setMoviesList] = useState([]);
	const [movieDetailArr, setMovieDetailArr] = useState([]);
	const [querryArr, setQuerryArr] = useState([]);
	const [isOverlay, setIsOverlay] = useState(false);
	return (
		<MovieContext.Provider
			value={{
				moviesList,
				setMoviesList,
				movieDetailArr,
				querryArr,
				setMovieDetailArr,
				setQuerryArr,
				isOverlay,
				setIsOverlay,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;

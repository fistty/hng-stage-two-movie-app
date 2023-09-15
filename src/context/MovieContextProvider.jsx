import React, { useState } from "react";
import { MovieContext } from "./MovieContext";

const MovieContextProvider = ({ children }) => {
	const [moviesList, setMoviesList] = useState([]);
	const [movieDetailArr, setMovieDetailArr] = useState([]);
	const [querryArr, setQuerryArr] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [reload, setReload] = useState(true);
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

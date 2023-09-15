import React, { useState } from "react";
import { MovieContext } from "./MovieContext";

const MovieContextProvider = ({ children }) => {
	const [moviesList, setMoviesList] = useState([]);
	const [movieDetailArr, setMovieDetailArr] = useState([]);
	const [querryArr, setQuerryArr] = useState([]);
	const [reload, setReload] = useState(true);
	return (
		<MovieContext.Provider
			value={{
				moviesList,
				setMoviesList,
				movieDetailArr,
				querryArr,
				setMovieDetailArr,
				setQuerryArr,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;

import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const useMovieContext = () => {
	return useContext(MovieContext);
};

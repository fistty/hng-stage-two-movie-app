import { getMovieDetails } from "../helpers/api";

export const movieDetailsLoader = async ({ params }) => {
	const { id } = params;
	await getMovieDetails(id);
	const movieDetail = await getMovieDetails(id);

	// To prevent the movie poster from displaying the previous images before a new image
	const baseImageURL = await "https://image.tmdb.org/t/p/w1280";
	const imagePosterURL = await `${baseImageURL}${movieDetail.backdrop_path}`;

	return { movieDetail, imagePosterURL };
};

import { getMovieDetails } from "../helpers/api";

export const movieDetailsLoader = async ({ params }) => {
	const { id } = params;
	await getMovieDetails(id);
	const movieDetail = await getMovieDetails(id);

	if (!movieDetail) {
		throw Error("Could not find your request");
	}

	// To prevent the movie poster from displaying the previous images before a new image
	const baseImageURL = await "https://image.tmdb.org/t/p/w1280";
	let imagePosterURL = await `${baseImageURL}${movieDetail.backdrop_path}`;
	if (!movieDetail.backdrop_path) {
		imagePosterURL = null;
	}

	return { movieDetail, imagePosterURL };
};

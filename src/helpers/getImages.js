export const getImages = (moviePoster) => {
	if (!moviePoster) {
		return "../../assets/placeholder.svg";
	}
	const baseImageUrl = "https://image.tmdb.org/t/p/w185";
	return `${baseImageUrl}/${moviePoster}`;
};

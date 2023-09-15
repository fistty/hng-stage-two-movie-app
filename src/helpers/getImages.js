export const getImages = (imageUrl) => {
	if (!imageUrl) {
		return "../../assets/placeholder.svg";
	}
	const baseImageUrl = "https://image.tmdb.org/t/p/w185";
	return `${baseImageUrl}/${imageUrl}`;
};

export const getImages = (imageUrl) => {
	if (!imageUrl) {
		return "../../assets2/placeholder.svg";
	}
	const baseImageUrl = "https://image.tmdb.org/t/p/w185";
	return `${baseImageUrl}/${imageUrl}`;
};

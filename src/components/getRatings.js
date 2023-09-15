export const getRatings = (vote) => {
	let formatedRating = vote.toString();
	if (formatedRating.length > 3) {
		let split = formatedRating.split(".");
		formatedRating = `${split[0]}.${split[1].slice(0, 1)}`;
	}
	return formatedRating;
};

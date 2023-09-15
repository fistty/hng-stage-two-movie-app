export const getRatings = (vote, count) => {
	// Handle the case when count is present and vote is 0
	if (count && vote === 0) {
		return "";
	}

	// Handle the case when count is present
	if (count) {
		return "| 350k";
	}

	// Handle the case when vote is 0
	if (vote === 0) {
		return "-";
	}

	// Format the vote with one decimal place without rounding
	const parts = vote.toString().split(".");
	if (parts.length > 1) {
		// If there are decimal places, truncate to one decimal place
		return `${parts[0]}.${parts[1].charAt(0)}`;
	} else {
		// If there are no decimal places, return as-is
		return vote.toString();
	}
};

export const getDate = (date) => {
	let comma = ", ";
	let string = `${new Date(date).getFullYear()}`;
	string = comma + string;
	return string;

	date = "1972-03-14";
	console.log(new Date(date).toUTCString());
};

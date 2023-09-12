export const getMovies = async () => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGI2YjcwMjY1Mzk4ZjYwYWY1ZGUwYjIwZjAwZjBkYSIsInN1YiI6IjY0ZmY0YWQ5MmRmZmQ4MDExZGYwYTMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bsdd9DjTcSJDQkf66d-y6gbYi6c2fdEZFQscQEVCBb4",
		},
	};

	const data = await await fetch(
		"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
		options
	);
	const dataJ = await data.json();
	console.log(dataJ);
	setFirst("last");
	setMoviesList(dataJ);
};

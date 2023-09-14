import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetails";
import "./App.css";
import { useContext, useEffect } from "react";
import MovieContextProvider from "./context/MovieContextProvider";
import { getMovies } from "./helpers/api";
import { useMovieContext } from "./context/useMovieContext";
import { MovieContext } from "./context/MovieContext";
import { MovieList } from "./components/MovieList";
import { data } from "./data";
import { movieDetailsLoader } from "./loaders/movieDetailsLoader";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route
					path="movies/:id"
					element={<MovieDetail />}
					loader={movieDetailsLoader}
				></Route>
			</Route>
		)
	);

	const { setMoviesList } = useMovieContext();

	useEffect(() => {
		// Not synchronous
		// getMovies(setMoviesList);
		setMoviesList(data);
	}, []);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

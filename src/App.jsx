import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";
import { useContext, useEffect } from "react";
import MovieContextProvider from "./context/MovieContextProvider";
import { getMovies } from "./helpers/api";
import { useMovieContext } from "./context/useMovieContext";
import { MovieContext } from "./context/MovieContext";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route element={<MovieDetails />}></Route>
			</Route>
		)
	);

	const { moviesList, setMoviesList, reload, setReload } =
		useContext(MovieContext);

	useEffect(() => {
		// getMovies(setMoviesList);
	}, []);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

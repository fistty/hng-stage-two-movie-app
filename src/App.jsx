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
import { useEffect } from "react";
import { useMovieContext } from "./context/useMovieContext";
import { data } from "./data";
import { movieDetailsLoader } from "./loaders/movieDetailsLoader";
import { getMovies } from "./helpers/api";
import { Overlay } from "./components/Overlay";

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

	const { setMoviesList, isOverlay } = useMovieContext();

	useEffect(() => {
		// Not synchronous
		getMovies(setMoviesList);
		// setMoviesList(data);
	}, []);

	return (
		<div className="div">
			{isOverlay ? <Overlay /> : null}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

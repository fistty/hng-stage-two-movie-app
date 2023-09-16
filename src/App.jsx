import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetails";
import "./App.css";
import { useMovieContext } from "./context/useMovieContext";
import { movieDetailsLoader } from "./loaders/movieDetailsLoader";
import { getMovies } from "./helpers/api";
import { Overlay } from "./components/Overlay";
import { NotFound } from "./pages/NotFound";
import { MovieError } from "./pages/MovieError";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route
					path="movies/:id"
					element={<MovieDetail />}
					loader={movieDetailsLoader}
					errorElement={<MovieError />}
				></Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	const { setMoviesList, isOverlay } = useMovieContext();

	useEffect(() => {
		// Not synchronous
		getMovies(setMoviesList);

		return () => {
			window.scroll({
				top: 0,
				behavior: "smooth",
			});
		};
	}, []);

	return (
		<div className="div">
			{isOverlay ? <Overlay /> : null}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

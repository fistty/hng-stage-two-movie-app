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

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route element={<MovieDetails />} />
			</Route>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

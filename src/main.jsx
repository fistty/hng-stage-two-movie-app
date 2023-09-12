import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MovieContextProvider from "./context/MovieContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<MovieContextProvider>
		{" "}
		<App />
	</MovieContextProvider>

	// </React.StrictMode>,
);

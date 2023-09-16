import React, { useEffect, useState } from "react";
import { getQueriedMovies } from "../helpers/api";
import { useMovieContext } from "../context/useMovieContext";
import { SearchResult } from "./SearchResult";
let searchTextTimeout;

function SearchInput() {
	const { setMoviesList, setQuerryArr, setIsOverlay, isOverlay } =
		useMovieContext();
	const [searchText, setSearchText] = useState("");

	const handleChange = (e) => {
		setSearchText(e.target.value);
		// Clear any existing timeout
		if (searchTextTimeout) {
			clearTimeout(searchTextTimeout);
		}

		// Set a new timeout
		searchTextTimeout = setTimeout(() => {
			getQueriedMovies(searchText, setQuerryArr, "toSlice");
		}, 500); // Adjust the delay time as needed
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// getQueriedMovies(searchText, setMoviesList);
	};

	const handleInputFocus = () => {
		setIsOverlay(true);

		if (searchTextTimeout) {
			clearTimeout(searchTextTimeout);
		}

		// Set a new timeout
		searchTextTimeout = setTimeout(() => {
			getQueriedMovies(searchText, setQuerryArr, "toSlice");
		}, 500); // Adjust the delay time as needed
	};
	useEffect(() => {
		return () => {
			setSearchText("");
			clearTimeout(searchTextTimeout);
			setIsOverlay(false);
		};
	}, []);

	return (
		<form className="form-search" onSubmit={handleSubmit}>
			<input
				className="search-input"
				type="text"
				name="search"
				id="search"
				value={searchText}
				onChange={handleChange}
				placeholder="What do you want to watch?"
				onFocus={handleInputFocus}
			/>
			<button className="search-button">
				<svg
					className="search-svg"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<path
						d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			{searchText.length > 1 && isOverlay ? (
				<SearchResult searchText={searchText} />
			) : null}
		</form>
	);
}

export default SearchInput;

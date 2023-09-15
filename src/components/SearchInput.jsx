import React, { useState } from "react";
import { getQueriedMovies } from "../helpers/api";
import { useMovieContext } from "../context/useMovieContext";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchInput() {
	const { setMoviesList } = useMovieContext();
	const [searchText, setSearchText] = useState("");

	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getQueriedMovies(searchText, setMoviesList);
	};

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
		</form>
	);
}

export default SearchInput;

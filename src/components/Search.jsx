import React from "react";

function Search() {
	return (
		<form>
			<input
				type="text"
				name="search"
				id="search"
				placeholder="What do you want to watch?"
			/>
			<svg
				className="search-svg"
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className="path"
					d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
					stroke={"white"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</svg>
		</form>
	);
}

export default Search;

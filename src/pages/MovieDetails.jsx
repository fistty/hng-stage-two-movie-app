import React, { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { MovieInfo } from "../components/MovieInfo";
import "./MovieDetails.css";
import { useLoaderData } from "react-router-dom";
import { useMovieContext } from "../context/useMovieContext";

export const MovieDetail = () => {
	const { movieDetail, imagePosterURL } = useLoaderData();
	const { setMovieDetailArr } = useMovieContext();

	useEffect(() => {
		setMovieDetailArr(movieDetail);
		console.log(movieDetail);
		const body = document.querySelector("body");
		body.style.marginBottom = "0px";
		return () => {
			body.style.marginBottom = "4.8rem";
		};
	}, []);
	return (
		<main className="movie-details">
			<SideBar />
			<section className="movie-details-section">
				<div className="empty"></div>
				<MovieInfo imagePosterURL={imagePosterURL} />
			</section>
		</main>
	);
};

import React from "react";
import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movie";
import { getMovie } from "@/services/movie";

// import Movies from "@/mocks/movies.json";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

//const API_URL = "https://api.themoviedb.org/3";

// const getMovie = async (movieId) => {
//   const res = await fetch(
//     `${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY} `
//   );
//   return res.json();
//   //console.log(data);
// };

async function MoviePage({ params, searchParams }) {
  // await delay(2000);

  const movieDetail = await getMovie(params.id);

  // console.log(movie);
  //console.log(params);
  //console.log(movieDetail);

  if (!movieDetail) {
    notFound();
  }

  // if (!searchParams.error === "true") {
  //   throw new Error("Error Happened");
  // }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;

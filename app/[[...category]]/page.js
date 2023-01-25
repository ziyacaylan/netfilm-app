import React from "react";
import HomeContainer from "@/containers/home";

import {
  fetchMovieApi,
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
} from "@/services/movie";

// import Movies from "@/mocks/movies.json";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const API_URL = "https://api.themoviedb.org/3";

// const getSingleCategory = async (genreId) => {
//   return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
//   // const res = await fetch(
//   //   `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
//   // );
//   // return res.json();
//   //console.log(data);
// };

// const getCategories = async () => {
//   return fetchMovieApi("/genre/movie/list", "&page=1");

//   // const res = await fetch(
//   //   `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
//   // );
//   // return res.json();
//   //console.log(data);
// };

// const getTopRatedMovies = async () => {
//   return fetchMovieApi("/movie/top_rated", "&page=1");

//   // const res = await fetch(
//   //   `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
//   // );
//   // return res.json();
//   //console.log(data);
// };

// const getPopularMovies = async () => {
//   return fetchMovieApi("/movie/popular", "&page=1");

//   // const res = await fetch(
//   //   `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
//   // );
//   // return res.json();
//   //console.log(data);
// };

async function HomePage({ params }) {
  // await delay(2000);
  // console.log(params);
  let selectedCategory;

  // const topRatedPromise = getTopRatedMovies();
  // const popularPromise = getPopularMovies();
  // const categoriesPromise = getCategories();

  // const { results: topRatedMovies } = await getTopRatedMovies();
  // const { results: popularMovies } = await getPopularMovies();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;

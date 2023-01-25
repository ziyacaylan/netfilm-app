import React from "react";

import FeatureMovieLoading from "@/components/featured-movie/loading";
import CategoriesLoading from "@/components/categories/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

function loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
}

export default loading;

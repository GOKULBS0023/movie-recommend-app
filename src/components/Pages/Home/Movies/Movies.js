import React, { useState, useEffect } from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import { tmdb_api } from "../../../../API_KEYS/api_key";

import axios from "axios";
import MainWrapper from "../../../MainWrapper/MainWrapper";
import DisplayContentList from "../DisplayContentList/DisplayContentList";
import Footer from "../../../Shared/Footer/Footer";

const Movies = () => {
  const [contentList, setContentList] = useState([""]);
  const fetchTrendingMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api}&sort_by=popularity.desc&language=en-US`
      )
      .then((res) => {
        setContentList(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  return (
    <React.Fragment>
      <Navbar page="movies" />
      <MainWrapper>
        <DisplayContentList contentList={contentList} media={"movie"}/>
      </MainWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Movies;

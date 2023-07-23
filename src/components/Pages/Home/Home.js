import React, { useEffect, useState } from "react";
import axios from "axios";
// import { auth } from "../../../Config/Firebase";
import { tmdb_api } from "../../../API_KEYS/api_key";
import Navbar from "../../Shared/Navbar/Navbar";
import DisplayContentList from "./DisplayContentList/DisplayContentList";
import MainWrapper from "../../MainWrapper/MainWrapper";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  const [contentList, setcontentList] = useState([""]);
  const fetchTrendingMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdb_api}&sort_by=popularity.desc&include_adult=false`
      )
      .then((res) => {
        setcontentList(res.data.results);
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
      <Navbar page={"home"} />
      <MainWrapper>
        <DisplayContentList contentList={contentList} />
      </MainWrapper>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;

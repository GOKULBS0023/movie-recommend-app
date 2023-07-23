import React, { useState } from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import MainWrapper from "../../../MainWrapper/MainWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Shared/Footer/Footer";
import Styles from "./Search.module.css";
// import DisplayContentList from "../DisplayContentList/DisplayContentList";
import { tmdb_api } from "../../../../API_KEYS/api_key";
import axios from "axios";
import DisplayContentList from "../DisplayContentList/DisplayContentList";
import Info from "../../../Shared/Info/Info";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [contentList, setContentList] = useState([""]);
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?query=${query.replace(
      / /g,
      "+"
    )}&api_key=${tmdb_api}`;
    setShowSearch(true);
    axios
      .get(url)
      .then((res) => {
        setContentList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Navbar page="search" />
      <MainWrapper className={Styles["main__wrapper"]}>
        <form className={Styles["search__form"]}>
          <input
            type="search"
            placeholder="Search movies here..."
            className={Styles["search__input"]}
            value={query}
            onChange={handleSearchChange}
            required
            autoFocus
          />
          <button
            type="submit"
            className={Styles["search__btn"]}
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </form>
        {showSearch ? (
          <DisplayContentList contentList={contentList} />
        ) : (
          <Info
            icon={<FontAwesomeIcon icon={faSearch} />}
            value={"Your search results will be shown here..."}
          />
        )}
      </MainWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Search;

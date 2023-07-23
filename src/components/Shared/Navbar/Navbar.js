import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import AuthContext from "../../../Context/AuthContext";

const Navbar = (props) => {
  const [windowSize, setWindowSize] = useState();
  const user = useContext(AuthContext);
  const [userDisplayLogo, setUserDisplayLogo] = useState();
  useEffect(() => {
    setUserDisplayLogo(user?.email.charAt(0).toUpperCase());
  }, [user]);
  const getWindowSize = () => {
    setWindowSize(window.innerWidth);
  };
  window.addEventListener("resize", getWindowSize);
  return (
    <nav className={Styles.nav}>
      <NavLink to="/" className={Styles["nav__logo"]}>
        Cine
        <span className={Styles["nav__logo-color"]}>
          matic <FontAwesomeIcon icon={faPlayCircle} />
        </span>
      </NavLink>
      <NavLink
        to="/"
        className={`${Styles["nav__items"]} ${
          props.page === "home" && Styles["active"]
        }`}
      >
        Trending
      </NavLink>
      <NavLink
        to="/movies"
        className={`${Styles["nav__items"]} ${
          props.page === "movies" && Styles["active"]
        }`}
      >
        Movies
      </NavLink>
      <NavLink
        to="/series"
        className={`${Styles["nav__items"]} ${
          props.page === "series" && Styles["active"]
        }`}
      >
        Series
      </NavLink>
      <NavLink
        to="/search"
        className={`${Styles["nav__items"]} ${
          props.page === "search" && Styles["active"]
        }`}
      >
        Search
      </NavLink>
      {user ? (
        <>
          {/* <NavLink
            to="/favorites"
            className={`${Styles["nav__items"]} ${
              props.page === "favorites" && Styles["active"]
            }`}
          >
            Favorites
          </NavLink> */}
          <NavLink
            to="/user"
            className={`${Styles["nav__items"]} ${
              props.page === "user" && Styles["active"]
            }`}
          >
            <div
              className={`${Styles["user__btn"]} ${
                props.page === "user" && Styles["active"]
              }`}
            >
              {userDisplayLogo}
            </div>
          </NavLink>
        </>
      ) : (
        <div className={Styles["nav__auth-btn"]}>
          {windowSize > 600 ? (
            <>
              <Link to="/login">
                <Button type="button" value="Login" />
              </Link>
              <Link to="/signup">
                <Button type="button" value="Sign up" />
              </Link>
            </>
          ) : (
            <div
              className={`${Styles["user__btn"]} ${
                props.page === "user" && Styles["active"]
              }`}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

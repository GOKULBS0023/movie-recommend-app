import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { auth, db } from "../../../Config/Firebase";
import { signOut } from "firebase/auth";
import Button from "../../Shared/Button/Button";
import AuthContext from "../../../Context/AuthContext";
import Navbar from "../../Shared/Navbar/Navbar";
import MainWrapper from "../../MainWrapper/MainWrapper";
import Footer from "../../Shared/Footer/Footer";
import Styles from "./User.module.css";
import Info from "../../Shared/Info/Info";

const User = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      const userRef = ref(db, "users" + user["uid"]);
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        setEmail(userData["email"]);
        setUsername(userData["username"]);
      });
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return (
    <React.Fragment>
      <Navbar page="user" />
      <MainWrapper>
        {isLoggedIn ? (
          <div className={Styles["user__details"]}>
            <h2 className={Styles["user__name"]}>
              Hey{" "}
              {username.charAt(0).toUpperCase() +
                username.slice(1).toLowerCase()}
              !
            </h2>
            <h3 className={Styles["user__email"]}>
              Email ID: <span> {email}</span>
            </h3>
            <form
              onSubmit={handleLogout}
              className={Styles["user__logout-form"]}
            >
              <Button type="submit" value="Logout" />
            </form>
          </div>
        ) : (
          <React.Fragment>
            <div className={Styles["user__auth"]}>
              <Info value={"Kindly login to view your details.."}></Info>
              <NavLink to="/login">
                <Button type="submit" value="Login" />
              </NavLink>
              <NavLink to="/signup">
                <Button type="submit" value="Sign Up" />
              </NavLink>
            </div>
          </React.Fragment>
        )}
      </MainWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default User;

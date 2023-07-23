import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, googleProvider, db } from "../../../Config/Firebase";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import MainWrapper from "../../MainWrapper/MainWrapper";
import Styles from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((userDetails) => {
        const uid = userDetails.user.uid;
        set(ref(db, "users" + uid), {
          userId: uid,
          username: userDetails.user.displayName,
          email: userDetails.user.email,
          createdAt: new Date().toISOString(),
          favorite: ['']
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password, username)
      .then((userDetails) => {
        const uid = userDetails.user.uid;
        set(ref(db, "users" + uid), {
          userId: uid,
          username: username,
          email: email,
          createdAt: new Date().toISOString(),
          favorite: ['']
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          alert(
            "Entered email id already registered with us. Kindly try login or use another email id to signup!"
          );
          setEmail("");
        }
      });
  };
  return (
    <React.Fragment>
      <Navbar />
      <MainWrapper>
        <div className={Styles["auth__box"]}>
          <form onSubmit={signUpHandler} className={Styles.form}>
            <h2 className={Styles["auth__type"]}>Login with password</h2>
            <div className={Styles["form__inputs"]}>
              <Input
                placeholder="Username..."
                type="text"
                onChange={usernameChangeHandler}
                value={username}
                required={true}
              />
              <Input
                placeholder="Email id..."
                type="email"
                onChange={emailChangeHandler}
                value={email}
                required={true}
              />
              <Input
                placeholder="Password..."
                type="password"
                onChange={passwordChangeHandler}
                value={password}
                required={true}
                className={Styles["full__width"]}
              />
            </div>
            <Button type="submit" value="Sign Up" />
          </form>
          <h2 className={Styles["auth__type"]}>Login with Google</h2>
          <Button
            type="button"
            value="oogle"
            icon={googleIcon}
            onClick={loginWithGoogle}
          />
          <div className={Styles["change__auth"]}>
            <p>Already have an account? </p>
            <Link to="/login" className={Styles["change__auth-link"]}>
              Login
            </Link>
          </div>
        </div>
      </MainWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Signup;

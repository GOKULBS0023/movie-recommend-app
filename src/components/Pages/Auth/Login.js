import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ref, set } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../../../Config/Firebase";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import MainWrapper from "../../MainWrapper/MainWrapper";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Styles from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          alert("Kindly enter the valid password!");
        } else if (errorCode === "auth/user-not-found") {
          alert("Kindly register to continue!");
          navigate("/signup");
        }
        setPassword("");
      });
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
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  

  return (
    <React.Fragment>
      <Navbar />
      <MainWrapper>
        <div className={Styles["auth__box"]}>
          <form onSubmit={loginHandler} className={Styles.form}>
            <h2 className={Styles["auth__type"]}>Login with password</h2>
            <div className={Styles["form__inputs"]}>
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
              />
            </div>
            <Button type="submit" value="Login" />
          </form>
          <h2 className={Styles["auth__type"]}>Login with Google</h2>
          <Button
            type="button"
            value={`oogle`}
            icon={googleIcon}
            onClick={loginWithGoogle}
          />

          <div className={Styles["change__auth"]}>
            <p>Didn't have an account? </p>
            <Link to="/signup" className={Styles["change__auth-link"]}>
              Sign up
            </Link>
          </div>
        </div>
      </MainWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Login;

import React from "react";
import Styles from "./MainWrapper.module.css"

const MainWrapper = ({ children }) => {
  return <section className={Styles.wrapper}>{children}</section>;
};

export default MainWrapper;

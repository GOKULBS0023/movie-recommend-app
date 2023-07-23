import React from "react";
import Styles from "./Info.module.css";

const Info = (props) => {
  return (
    <div style={{height: "50vh"}} className={Styles["info-box"]}>
      <h3 className={Styles["info"]}>{props.value}</h3>
      <h3 className={Styles["icon"]}>{props.icon}</h3>
    </div>
  );
};

export default Info;

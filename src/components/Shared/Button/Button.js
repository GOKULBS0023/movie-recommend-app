import React from "react";
import Styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={Styles.btn}>
      {props.icon && <span style={{ fontSize:"1.4rem" }}>{props.icon}</span>}
      {props.value}{" "}
    </button>
  );
};

export default Button;

import React from "react";
import Styles from "./Input.module.css";
const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      required={props.required}
      className={Styles["input"]}
    />
  );
};

export default Input;

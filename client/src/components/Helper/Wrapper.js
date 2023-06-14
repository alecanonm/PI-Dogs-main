import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
  const style = `${styles.wrapper} ${props.className}`;
  return <main className={style}>{props.children}</main>;
};

export default Wrapper;

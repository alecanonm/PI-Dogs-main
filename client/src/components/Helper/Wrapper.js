import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
  const style = `${styles.wrapper} ${props.className}`;
  return <div className={style}>{props.children}</div>;
};

export default Wrapper;

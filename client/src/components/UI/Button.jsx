import styles from "./Button.module.css";

const Button = (props) => {
  const style = `${styles.button} ${props.className}`;
  return (
    <button
      type={props.type || "submit"}
      onClick={props.onClick}
      className={style}
    >
      {props.children}
    </button>
  );
};

export default Button;

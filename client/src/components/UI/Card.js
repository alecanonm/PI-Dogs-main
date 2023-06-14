import styles from "./Card.module.css";

const Card = (props) => {
  const style = `${styles.card} ${props.className}`;
  return <div className={style}>{props.children}</div>;
};

export default Card;

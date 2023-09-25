import styles from "./Footer.module.css";
import linkedin from "../../assets/linkedin.svg";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <section>
        <h3>
          <i> © {props.name}</i>
        </h3>
        <img src={linkedin} width={20} height={20} alt="linkedin" />
      </section>
    </footer>
  );
};

export default Footer;

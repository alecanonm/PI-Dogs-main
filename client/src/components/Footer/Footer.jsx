import styles from "./Footer.module.css";
import linkeding from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <section>
        <div className={styles.social}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/alecanonm/"
          >
            <img src={linkeding} alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/alecanonm"
          >
            <img src={github} alt="" />
          </a>
        </div>
        <h3>
          Copyright © {props.name} - {props.date}
        </h3>
      </section>
    </footer>
  );
};

export default Footer;

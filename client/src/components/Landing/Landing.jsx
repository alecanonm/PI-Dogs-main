import styles from "./Landing.module.css";
import vidgDog from "../../assets/landing.mp4";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
const Landing = (props) => {
  const navigate = useNavigate();

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <main className={styles.landing}>
        <section>
          <h1>
            DO YOU KNOW HOW MANY BREED OF DOGS
            <br /> THERE ARE?
          </h1>
          <Button
            type="button"
            onClick={navigateHandler}
            className={styles.button}
          >
            Find out!
          </Button>
        </section>
      </main>
      <video src={vidgDog} muted autoPlay loop></video>
      <div className={styles.layer}></div>
    </>
  );
};

export default Landing;

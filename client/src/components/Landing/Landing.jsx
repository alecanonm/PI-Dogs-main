import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
const Landing = () => {
  const navigate = useNavigate();

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <main className={styles.landing}>
      <section>
        <div>
          <h1>
            DO YOU KNOW HOW MANY BREED OF DOGS
            <br /> THERE ARE?
          </h1>
        </div>
        <Button
          type="button"
          onClick={navigateHandler}
          className={styles.button}
        >
          Find out!
        </Button>
      </section>
    </main>
  );
};

export default Landing;

import imgLogo from "../../assets/pawprint.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import home from "../../assets/home.png";
import dog from "../../assets/dog.png";
const NavBar = () => {
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
    window.location.reload();
  };

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.logo}
        onClick={handleClick}
        src={imgLogo}
        width="50"
        height="50"
        alt="foot dog logo"
      />
      <SearchBar />
      <ul>
        <Link to="/mydogs" className={styles.link}>
          <li>My dogs</li>
        </Link>
        <Link className={styles.link} to="/">
          <img src={home} width={30} height={30} alt="home" />
        </Link>
      </ul>
      <button
        onClick={() => setToggled((prevToggled) => !prevToggled)}
        className={`${!toggled ? styles.burger : styles.active}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {toggled && (
        <section className={styles.toggleMenu}>
          <section>
            <img
              onClick={handleClick}
              alt="foot dog logo"
              src={imgLogo}
              width={80}
              height={80}
            />
            <Link
              onClick={() => setToggled((prev) => !prev)}
              className={styles.link}
              to="/mydogs"
            >
              <img src={dog} width={50} height={50} alt="dog" />
            </Link>
            <Link className={styles.link} to="/">
              <img src={home} width={50} height={50} alt="home" />
            </Link>
          </section>
        </section>
      )}
    </nav>
  );
};

export default NavBar;

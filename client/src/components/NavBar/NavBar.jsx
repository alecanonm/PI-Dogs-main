import imgLogo from "../../assets/pawprint.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
        alt="foot dog logo "
      />
      <SearchBar />
      <ul>
        <Link to="/mydogs" className={styles.link}>
          <li>My dogs</li>
        </Link>
        <Link className={styles.link} to="/">
          <li>Leave</li>
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
    </nav>
  );
};

export default NavBar;

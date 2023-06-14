import imgLogo from "../../assets/pawprint.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.dropdown}></div>
      <img src={imgLogo} alt="" />
      <div className={styles.searchBar}>
        <SearchBar />
      </div>

      <ul>
        <a href="/home" className={styles.link}>
          <li>Home</li>
        </a>
        <Link to="/mydogs" className={styles.link}>
          <li>My dogs</li>
        </Link>
        <Link className={styles.link} to="/">
          <li>Leave</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

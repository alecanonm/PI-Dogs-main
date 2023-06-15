import imgLogo from "../../assets/pawprint.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
    window.location.reload();
  };

  return (
    /* <nav> */ <div className={styles.navbar}>
      <div className={styles.dropdown}></div>
      <img onClick={handleClick} src={imgLogo} alt="" />
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
    </div>
  );
};

export default NavBar;

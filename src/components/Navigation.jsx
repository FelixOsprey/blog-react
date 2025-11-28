import { Link } from "react-router";
import styles from "../styles/Navigation.module.css";
import Logo from "../assets/booklogo.svg";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={Logo} alt="Logo" />

      <ul className={styles.menu}>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

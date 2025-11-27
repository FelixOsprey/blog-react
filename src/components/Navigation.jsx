import { Link } from "react-router";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>LOGO</div>

      {/* Menu */}
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

import styles from "../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/booklogo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>

      <div className={styles.socials}>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

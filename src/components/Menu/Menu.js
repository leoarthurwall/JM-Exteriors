import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-scroll";

const Menu = ({ isOpen, handleMenuClick }) => {
  return (
    <div className={isOpen ? styles.containerOpen : styles.containerClosed}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            onClick={handleMenuClick}
            className="nav-link"
            activeClass="active"
            to="homeSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            onClick={handleMenuClick}
            className="nav-link"
            activeClass="active"
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            About
          </Link>
        </li>
        <li className={styles.item}>
          {" "}
          <Link
            onClick={handleMenuClick}
            className="nav-link"
            activeClass="active"
            to="servicesSection"
            spy={true}
            smooth={true}
            offset={-220}
            duration={0}
          >
            Services
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            onClick={handleMenuClick}
            className="nav-link"
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

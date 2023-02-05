import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ isOpen, handleMenuClick }) => {
  return (
    <div className={isOpen ? styles.containerOpen : styles.containerClosed}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#homeSection" onClick={handleMenuClick}>
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a href="#aboutSection" onClick={handleMenuClick}>
            About
          </a>
        </li>
        <li className={styles.item}>
          <a href="#servicesSection" onClick={handleMenuClick}>
            Services
          </a>
        </li>
        <li className={styles.item}>
          <a href="#contactSection" onClick={handleMenuClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

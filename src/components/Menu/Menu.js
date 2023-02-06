import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ isOpen, handleMenuClick }) => {
  return (
    <div className={isOpen ? styles.containerOpen : styles.containerClosed}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#home" onClick={handleMenuClick}>
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a href="#about" onClick={handleMenuClick}>
            About
          </a>
        </li>
        <li className={styles.item}>
          <a href="#services" onClick={handleMenuClick}>
            Services
          </a>
        </li>
        <li className={styles.item}>
          <a href="#contact" onClick={handleMenuClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

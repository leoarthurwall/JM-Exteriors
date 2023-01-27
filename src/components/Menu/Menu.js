import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ isOpen }) => {
  return (
    <div className={isOpen ? styles.containerOpen : styles.containerClosed}>
        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>About</li>
          <li className={styles.item}>Services</li>
          <li className={styles.item}>Contact</li>
        </ul>
    </div>
  );
};

export default Menu;

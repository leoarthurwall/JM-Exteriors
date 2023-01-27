import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ isOpen }) => {
  return (
    <div className={isOpen ? styles.container : styles.container2}>Menu</div>
  );
};

export default Menu;

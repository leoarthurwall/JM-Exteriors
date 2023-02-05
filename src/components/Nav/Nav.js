import React from "react";
import styles from "./Nav.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = ({ handleMenuClick, isOpen }) => {


  return (
    <nav className={styles.container}>
      <a href="#homeSection" onClick={isOpen && handleMenuClick}>
        <img
          src="images/logoOutline.png"
          alt="logo"
          className={styles.logo}
        ></img>
      </a>
      {isOpen ? (
        <span className={styles.iconWrapper}>
          <AiOutlineClose size={40} stylr onClick={handleMenuClick} />
        </span>
      ) : (
        <span className={styles.iconWrapper}>
          <HiOutlineMenu size={40} onClick={handleMenuClick} />
        </span>
      )}
    </nav>
  );
};

export default Nav;

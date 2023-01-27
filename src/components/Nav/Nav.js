import React from "react";
import { useState } from "react";
import styles from "./Nav.module.css";
import { useMediaQuery } from "react-responsive";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Nav = ({ handleMenuClick, isOpen }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 550px)",
  });

  return (
    <nav className={styles.container}>
      <img
        src="images/logoOutline.png"
        alt="logo"
        className={styles.logo}
      ></img>
      {isMobile ? (
        isOpen ? (
          <GrClose size={32} onClick={handleMenuClick} />
        ) : (
          <HiOutlineMenu size={40} onClick={handleMenuClick} />
        )
      ) : (
        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>About</li>
          <li className={styles.item}>Services</li>
          <li className={styles.item}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

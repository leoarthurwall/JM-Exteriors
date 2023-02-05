import React from "react";
import styles from "./Nav.module.css";
import { useMediaQuery } from "react-responsive";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = ({ handleMenuClick, isOpen  }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 550px)",
  });

  return (
    <nav className={styles.container}>
      <a href="#homeSection" onClick={isOpen && handleMenuClick}>
        <img
          src="images/logoOutline.png"
          alt="logo"
          className={styles.logo}
        ></img>
      </a>
      {isMobile ? (
        isOpen ? (
          <span className={styles.iconWrapper}>
            <AiOutlineClose size={40} stylr onClick={handleMenuClick} />
          </span>
        ) : (
          <span className={styles.iconWrapper}>
            <HiOutlineMenu size={40} onClick={handleMenuClick} />
          </span>
        )
      ) : (
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#homeSection">Home</a>
          </li>
          <li className={styles.item}>
            <a href="#aboutSection">About</a>
          </li>
          <li className={styles.item}>
            <a href="#servicesSection">Services</a>
          </li>
          <li className={styles.item}>
            <a href="#contactSection">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

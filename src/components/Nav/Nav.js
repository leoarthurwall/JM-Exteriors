import React from "react";
import styles from "./Nav.module.css";
import { useMediaQuery } from "react-responsive";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Nav = ({ handleMenuClick, isOpen }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 550px)",
  });

  return (
    <nav className={styles.container}>

      {" "}
      {/* <Link
        className="nav-link"
        activeClass="active"
        href="./homeSection"
        // to="homeSection"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      > */}
      <a         href="#homeSection"
>

        <img
          src="images/logoOutline.png"
          alt="logo"
          className={styles.logo}
        ></img>
      </a>
      {/* </Link> */}
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
            <Link
              className="nav-link"
              activeClass="active"
              to="homeSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className="nav-link"
              activeClass="active"
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={styles.item}>
            {" "}
            <Link
              className="nav-link"
              activeClass="active"
              to="servicesSection"
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className="nav-link"
              activeClass="active"
              to="contactSection"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

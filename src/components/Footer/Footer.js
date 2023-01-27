import React from "react";
import styles from "./Footer.module.css";
import { AiFillPhone, AiFillMail, AiFillClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <AiFillPhone />
            07946 430774
          </li>
          <li className={styles.list}>
            <AiFillMail />
            jakemayexteriors@gmail.com
          </li>
          <li className={styles.list}>
            <ImLocation />
            Isle of Wight
          </li>
          <li className={styles.list}>
            <AiFillClockCircle />
            08:00-17:00, Mon-Fri
          </li>
        </ul>
      </div>
      <img src="images/logo.jpeg" alt="logo" className={styles.logo}></img>
    </div>
  );
};

export default Footer;

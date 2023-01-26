import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src="images/logo.jpeg" alt="logo" className={styles.logo}></img>
      <div className={styles.right}>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <span className={styles.span}>Phone: </span>07946430774
          </li>
          <li className={styles.list}>
            <span className={styles.span}>Email:</span>{" "}
            jakemayexteriors@gmail.com
          </li>
          <li className={styles.list}>
            <span className={styles.span}>Address: </span>Isle of Wight
          </li>
          <li className={styles.list}>
            <span className={styles.span}>Business Hours: </span>08:00-17:00,
            Mon-Fri
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

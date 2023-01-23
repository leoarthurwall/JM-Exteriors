import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <h2 className={styles.logo}>J/M</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>About</li>
        <li className={styles.item}>Services</li>
        <li className={styles.item}>Contact</li>
      </ul>
      <ul className={styles.contactList}>
        <li className={styles.contact}>Email: JAKEMAYEXTERIORS@GMAIL.COM</li>
        <li className={styles.contact}>PHONE: 07946430774 </li>

      </ul>
    </nav>
  );
};

export default Nav;

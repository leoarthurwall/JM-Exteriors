import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <img src="images/logoOutline.png" alt="logo" className={styles.logo}></img>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>About</li>
        <li className={styles.item}>Services</li>
        <li className={styles.item}>Contact</li>
      </ul>
      {/* <ul className={styles.contactList}>
        <li className={styles.contact}><span className={styles.navSpan}>Email:</span>Email: jakemayexteriors@gmail.com</li>
        <li className={styles.contact}><span className={styles.navSpan}>Phone:</span> 07946430774 </li>

      </ul> */}
    </nav>
  );
};

export default Nav;

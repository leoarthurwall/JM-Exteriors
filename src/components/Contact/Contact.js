import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Contact us</h2>
      <p className={styles.para}>
        Thank you for considering JM Exteriors for your window fitting needs. If
        you have any questions or would like to schedule a consultation, please
        feel free to contact us. We look forward to hearing from you and helping
        you enhance the beauty and energy efficiency of your home.
      </p>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <span className={styles.span}>Phone: </span>07946430774
        </li>
        <li className={styles.list}>
          <span className={styles.span}>Email:</span> jakemayexteriors@gmail.com
        </li>
        <li className={styles.list}>
          <span className={styles.span}>Address: </span>Isle of Wight
        </li>
        <li className={styles.list}>
          <span className={styles.span}>Business Hours: </span>08:00-17:00,
          Mon-Fri
        </li>
      </ul>
      <p className={styles.para}>
        Thank you for choosing JM Exteriors for your window fitting needs. We
        are committed to providing you with the best service and quality
        workmanship.
      </p>
    </div>
  );
};

export default Contact;

import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Contact</h2>
      <p className={styles.para}>
        It's my job to provide you with the best possible service. If you would
        like a free quote, simply get in touch by phone or email:
      </p>
      <p className={styles.para}>
        <span className={styles.span}>Email: </span>
        jakemayexteriors@gmail.com
      </p>
      <p className={styles.para}>
        <span className={styles.span}>Phone:</span> 07946430774{" "}
      </p>
    </div>
  );
};

export default Contact;

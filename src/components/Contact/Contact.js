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

      <p className={styles.para}>
        Thank you for choosing JM Exteriors for your window fitting needs. We
        are committed to providing you with the best service and quality
        workmanship.
      </p>
      <button className={styles.button}>
        <a href="tel:07946430774">Call for a free quote</a>
      </button>
      <button className={styles.button}>
        <a href="mailto:jakemayexteriors@gmail.com">Send Email</a>
      </button>
    </div>
  );
};

export default Contact;

import React from "react";
import styles from "./Contact.module.css";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.header}>Contact us</h2>
      <p className={styles.para}>
        Thank you for considering JM Exteriors for your window fitting needs. If
        you have any questions or would like to schedule a consultation, please
        feel free to contact us. We look forward to hearing from you and helping
        you enhance the beauty and energy efficiency of your home.
      </p>

      <div className={styles.buttonWrapper}>
        <a href="tel:07946430774" className={styles.aText}>
          <AiFillPhone />
          Make a call
        </a>

        <a
          href="mailto:jakemayexteriors@gmail.com?subject=Enquiry for Jake May via Website"
          className={styles.aText}
        >
          <AiFillMail />
          Send an Email
        </a>
      </div>
      <p className={styles.para}>
        Thank you for choosing JM Exteriors for your window fitting needs. We
        are committed to providing you with the best service and quality
        workmanship.
      </p>
    </div>
  );
};

export default Contact;

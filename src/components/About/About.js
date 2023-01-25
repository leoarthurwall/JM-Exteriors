import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>About us</h2>
      <p className={styles.para}>
        Welcome to JM Exteriors, your local experts in window fitting on the
        Isle of Wight. We are a family-owned business with over 10 years of
        experience in the industry, providing high-quality products and
        professional installation services for our customers. Our mission is to
        enhance the beauty and energy efficiency of your home, while providing
        exceptional customer service.
      </p>
      <p className={styles.para}>
        As the owner of JM Exteriors, I take great pride in the work we do. I
        started this business because I have a passion for home improvement and
        enjoy helping people improve their living spaces. I have 10 years of
        experience in the window fitting industry, and I am a certified
        professional. I am dedicated to providing our customers
        with the highest level of service and quality workmanship.
      </p>
      <h2 className={styles.header}>Services</h2>
    </div>
  );
};

export default About;

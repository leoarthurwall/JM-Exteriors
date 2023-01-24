import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Welcome to JM Exteriors</h2>
      <p className={styles.para}>
        JM Exteriors Ltd specialise in the installation of quality PVCu,
        aluminium and timber double glazed windows, doors & conservatories. We
        also supply and fit fascias and soffits. We have many satiffied
        customers across the Isle of Wight. <br/> With over 10 years of professional
        experience we started to supply quality windows and doors. A small
        family business offering a specialist glazing service in the Isle of
        Wight. Service and quality have built the business through reputation
        for competitive prices and reliability.
      </p>
    </div>
  );
};

export default About;

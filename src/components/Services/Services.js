import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>Services</div>
        <div className={styles.gridItem}>IMG</div>
        <div className={styles.gridItem}>IMG</div>
        <ul className={styles.gridItem}>
          <li>Windows</li>
          <li>Doors</li>
          <li>Conservatories</li>
          <li>Guttering</li>
          <li>Facias & Soffits</li>
          <li>Classing</li>
        </ul>

        <div className={styles.gridItem}>IMG</div>
        <div className={styles.gridItem}>
          Offers services across the island. Call for a free quote now.
        </div>
      </div>
    </section>
  );
};

export default Services;

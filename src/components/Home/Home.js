import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container} id="homeSection">
      <div className={styles.headerWrapper}>
        <h1 className={styles.title}> JM Exteriors</h1>
        <h3 className={styles.subHeading}>Glazier & Exterior Professional</h3>
        <h3 className={styles.islandText}>Isle of Wight</h3>

      </div>
    </section>
  );
};

export default Home;

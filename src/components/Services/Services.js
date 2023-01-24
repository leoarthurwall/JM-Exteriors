import React from "react";
import styles from "./Services.module.css";

const Services = () => {
   const ServiceImage = [
        {
            header: "Windows",
            bgImage: "../../public/images/window.jpeg",
        },
        {
            header: "Doors",
            bgImage: "",
        },
        {
            header: "Conservatories",
            bgImage: "",
        },
        {
            header: "Guttering",
            bgImage: "",
        },
        {
            header: "Fasias & Soffits",
            bgImage: "",
        },
        {
            header: "Cladding",
            bgImage: "",
        }
    ]

  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        {ServiceImage.map((service, i) => {
        <img src={service.bgImage} alt="hello" className={styles.gridItem}>
            <h2 className={styles.itemHeader}>{service.header}</h2>
        
        </img >

        })}
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

        <div className={styles.gridItem}>
          Offers services across the island. Call for a free quote now.
        </div>
        <div className={styles.gridItem}>IMG</div>
      </div>
    </section>
  );
};

export default Services;

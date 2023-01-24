import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const serviceImage = [
    {
      header: "Windows",
      bgImage: "images/window.jpeg",
    },
    {
      header: "Doors",
      bgImage: "images/door.jpeg",
    },
    {
      header: "Conservatories",
      bgImage: "images/conservatory-2.jpeg",
    },
    {
      header: "Guttering",
      bgImage: "images/guttering.jpeg",
    },
    {
      header: "Fasias & Soffits",
      bgImage: "images/fasia&soffit.jpeg",
    },
    {
      header: "Cladding",
      bgImage: "images/cladding.jpeg",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        {serviceImage.map((service, index) => {
          return (
            <div className={styles.gridItem}>
              <img
                key={index}
                src={service.bgImage}
                alt={service.header}
                className={styles.image}
              ></img>
              <h2 className={styles.itemHeader}>{service.header}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

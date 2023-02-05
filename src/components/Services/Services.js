import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const serviceImage = [
    {
      header: "Windows",
      bgImage: "images/window.jpeg",
      text: "We offer a wide range of window styles and materials, including uPVC, aluminum, and timber. Our windows are energy-efficient and customizable to fit your specific needs and preferences.",
    },
    {
      header: "Doors",
      bgImage: "images/door.jpeg",
      text: "We offer a variety of door styles, including French, sliding, and bi-folding. We work with the best manufacturers to provide durable, secure, and energy-efficient doors.",
    },
    {
      header: "Conservatories",
      bgImage: "images/conservatory.jpeg",
      text: "Our conservatories are designed to provide an elegant and functional extension of your home. We offer a range of styles and materials to choose from, and our team will work with you to create a space that meets your specific needs and budget.",
    },

    {
      header: "Guttering, Soffits & Facias",
      bgImage: "images/fasia&soffit.jpeg",
      text: "We provide professional guttering, soffits and facias installation to keep your property protected from water damage. We use high-quality materials and ensure that your installation is done to the highest standard.",
    },
    {
      header: "Cladding",
      bgImage: "images/cladding.jpeg",
      text: "Our cladding services are a great way to improve the appearance and energy efficiency of your home. We offer a variety of materials, including PVC, wood, and aluminum.",
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
              <div className={styles.imageTextWrapper}>
                <h2 className={styles.itemHeader}>{service.header}</h2>
                <p className={styles.itemText}>{service.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import styles from "./Pepole.module.css";
const Pepole = ({ images }) => {
  return (
    <div className={styles.container}>
      <h2>Direct it to whome ?</h2>
      <div className={styles.content}>
        {images.map((img) => (
          <div key={img.id} className={styles.imageContainer}>
            <img
              src="https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg"
              alt=""
              className={styles.image}
            />
            <p className={styles.title}>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pepole;

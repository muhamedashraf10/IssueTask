import React, { useState } from "react";
import styles from "./Pepole.module.css";
const Pepole = ({ images }) => {
  const [selectPepole, setSelectPepole] = useState(null);
  const handlerSelectPepole = (id) => {
    setSelectPepole(id);
  };
  return (
    <div className={styles.container}>
      <h2>Direct it to whome ?</h2>
      <div className={styles.content}>
        {images.map((img) => (
          <div
            key={img.id}
            className={
              selectPepole === img.id
                ? styles.selectPepole
                : styles.imageContainer
            }
            onClick={() => handlerSelectPepole(img.id)}
          >
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

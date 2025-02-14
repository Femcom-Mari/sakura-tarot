// ReadingCardInfo.jsx
import React from "react";
import styles from "./CardImage.module.css";

export default function CardImage({ id, onClick, selected, selectedImage }) {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={() => onClick(id)}
    >
      <img
        src={
          selected ? selectedImage : "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg"
        }
        alt="Card Back"
        className={styles.cardImage}
      />
    </div>
  );
}

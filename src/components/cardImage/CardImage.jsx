// ReadingCardInfo.jsx
import React from "react";
import styles from "./CardImage.module.css";
import { useState, useEffect } from "react";

export default function CardImage({ id, img, selected, onFlip }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
    if (onFlip) onFlip(id, !flipped);
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""} ${selected ? styles.selected : ""}`}
      onClick={handleFlip}
    >
      <img
        src={flipped ? img : "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg"}
        alt={"dorso de la carta"}
        className={styles.cardImage}
      />
    </div>
  );
}

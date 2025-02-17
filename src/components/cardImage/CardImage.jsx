// ReadingCardInfo.jsx
import React, { useState, useEffect } from "react";
import styles from "./CardImage.module.css";

export default function CardImage({
  id,
  img,
  selected,
  showing,
  onFlip,
  style,
}) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (showing) {
      setFlipped(true);
    } else if (selected) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }, [showing, selected]);

  const handleFlip = () => {
    if (!selected && !showing) {
      setFlipped(!flipped);
      if (onFlip) onFlip(id, !flipped);
    }
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""} ${
        selected ? styles.selected : ""
      }`}
      onClick={handleFlip}
      style={style}
    >
      <img
        src={flipped ? img : "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg"}
        alt={"dorso de la carta"}
        className={styles.cardImage}
      />
    </div>
  );
}

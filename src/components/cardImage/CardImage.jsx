// ReadingCardInfo.jsx
import React, { useState, useEffect } from "react";
import styles from "./CardImage.module.css";

export default function CardImage({
  id,
  img,
  flipped: initialFlipped,
  onFlip,
  style,
}) {
  const [flipped, setFlipped] = useState(initialFlipped);

  useEffect(() => {
    setFlipped(initialFlipped);
  }, [initialFlipped]);

  const handleFlip = () => {
    const newFlipped = !flipped;
    setFlipped(newFlipped);
    if (onFlip) onFlip(id, newFlipped);
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
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

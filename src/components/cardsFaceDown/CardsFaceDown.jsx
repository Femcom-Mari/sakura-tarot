import React, { useState } from "react";
import style from "./CardsFaceDown.module.css";
import CardImage from "../cardImage/CardImage";

export default function CardsFaceDown() {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  return (
    <main className={style.main}>
      <h1>HOLIS SOY CARDS FACEDOWN</h1>
      <div className={style.deck}>
        {[1, 2, 3, 4, 5].map((id) => (
          <CardImage
            key={id}
            id={id}
            onClick={handleCardClick}
            selected={id === selectedCardId}
          />
        ))}
      </div>
    </main>
  );
}

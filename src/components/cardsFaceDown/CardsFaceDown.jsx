import React, { useState } from "react";
import style from "./CardsFaceDown.module.css";
import CardImage from "../cardImage/CardImage";

// Mi intento
// export default function CardsFaceDown() {
//   const [selectedCardIds, setSelectedCardIds] = useState([]);
//   const selectedImage = "https://i.ibb.co/BfJYRBK/Salto.jpg";

//   const handleCardClick = (id) => {
//     setSelectedCardIds((prevSelected) => {
//       if (prevSelected.includes(id)) {
//         // Remove if already selected
//         return prevSelected.filter((cardId) => cardId !== id);
//       } else if (prevSelected.length < 3) {
//         return [...prevSelected, id];
//       }
//       return prevSelected;
//     });
//   };


//Código EINAR:
export default function CardsFaceDown() {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const selectedImage = "https://i.ibb.co/BfJYRBK/Salto.jpg";

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    console.log("ID>>");
    console.log(id);
  };

  return (
    <main className={style.main}>
      <div className={style.deck}>
        {Array.from({ length: 50 }, (_, index) => index + 1).map((id) => (
          <CardImage
            key={id}
            id={id}
            onClick={handleCardClick}
            selected={id === selectedCardId}
            selectedImage={selectedImage}
          />
        ))}
      </div>
    </main>
  );
}
import React, { useState, useEffect } from "react";
import style from "./CardsFaceDown.module.css";
import CardImage from "../cardImage/CardImage";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

export default function CardsFaceDown() {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);
  const selectedImage = "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg";

  const handleCardClick = (id) => {
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(id)) {
        return prevSelectedCards.filter((cardId) => cardId !== id);
      } else if (prevSelectedCards.length < 3) {
        return [...prevSelectedCards, id];
      } else {
        return prevSelectedCards;
      }
    });
  };

  useEffect(() => {
    if (selectedCards.length === 3) {
      console.log("Selected Card IDs:", selectedCards);
      localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
      console.log(localStorage);
    }
  }, [selectedCards]);

  return (
    <main className={style.main}>
      <div className="chooseText">
        <h4>
          Elige tres cartas
          <br />
          para descubrir
          <br />
          tu pasado, presente, y futuro.
        </h4>
      </div>
      <div className={style.deck}>
        {Array.from({ length: 50 }, (_, index) => index + 1).map((id) => (
          <CardImage
            key={id}
            id={id}
            onClick={handleCardClick}
            selected={selectedCards.includes(id)}
            selectedImage={selectedImage}
          />
        ))}
      </div>
      <Button
        text={"Visualiza tu lectura"}
        onClick={() => navigate("/meaning")}
      />
    </main>
  );
}

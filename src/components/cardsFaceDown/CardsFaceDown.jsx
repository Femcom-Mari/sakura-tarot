import React, { useState } from "react";
import style from "./CardsFaceDown.module.css";
import CardImage from "../cardImage/CardImage";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

export default function CardsFaceDown() {
  const navigate = useNavigate();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const selectedImage = "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg";

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  return (
    <main className={style.main}>
      <div className="chooseText">
          <h4>
            Elige tres cartas 
            <br/>
            para descubrir
            <br/>
            tu pasado, presente, y futuro.
          </h4>
      </div>
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
      <Button text={"Visualiza tu lectura"} onClick={() => navigate("/meaning")} />
    </main>
  );
}
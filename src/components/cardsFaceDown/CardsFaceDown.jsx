import React, { useState, useEffect } from "react";
import style from "./CardsFaceDown.module.css";
import CardImage from "../cardImage/CardImage";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { getData } from "../../api/api"; // Asegúrate de importar la función para obtener los datos de la API

export default function CardsFaceDown() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [showingCard, setShowingCard] = useState(null);

  useEffect(() => {
    const getCards = async () => {
      const data = await getData();
      setCards(data);
      console.table(data);
    };
    getCards();
  }, []);

  const handleCardClick = (id) => {
    if (selectedCards.length < 3 && !selectedCards.includes(id)) {
      setShowingCard(id);
      setTimeout(() => {
        setSelectedCards((prevSelectedCards) => [...prevSelectedCards, id]);
        setShowingCard(null);
      }, 1000); // Mostrar la carta durante 1 segundo
    }
  };

  useEffect(() => {
    if (selectedCards.length === 3) {
      console.log("Selected Card IDs:", selectedCards);
      localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
      console.table(localStorage);
    }
  }, [selectedCards]);

  return (
    <main className={style.main}>
      <div className={style.chooseText}>
        <h4>
          Elige tres cartas
          <br />
          para descubrir
          <br />
          tu pasado, presente, y futuro.
        </h4>
      </div>
      <div className={style.deck}>
        {Array.from({ length: 54 }, (_, index) => {
          const card = cards[index % cards.length]; // Reutiliza las cartas si hay menos de 54 en la API
          if (!card) return null; // Verifica que card no sea undefined
          return (
            <CardImage
              key={index}
              id={card.id}
              img={card.clowCard} // Usa la URL de la imagen Clow obtenida de la API
              onFlip={handleCardClick}
              selected={selectedCards.includes(card.id)}
              showing={showingCard === card.id}
            />
          );
        })}
      </div>
      <div className={style.selectedDeck}>
        {selectedCards.map((id, index) => {
          const card = cards.find((card) => card.id === id);
          if (!card) return null; // Verifica que card no sea undefined
          return (
            <CardImage
              key={id}
              id={id}
              img={card.clowCard} // Usa la URL de la imagen Clow obtenida de la API
              selected={true}
              style={{ top: `${index * 10}px`, left: `${index * 10}px` }} // Ajusta la posición de cada carta
            />
          );
        })}
      </div>
      <Button
        text={"Visualiza tu lectura"}
        onClick={() => navigate("/meaning")}
      />
    </main>
  );
}

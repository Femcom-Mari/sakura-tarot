import styles from "./ReadingCard.module.css";
import CardImage from "../cardImage/CardImage";
import CardInfo from "../cardInfo/CardInfo";
import CardMeaning from "../CardMeaning/CardMeaning";
import { getData } from "./../../api/api.jsx";
import { useEffect, useState } from "react";

export default function ReadingCard() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await getData();
        console.log("Fetched Cards:", fetchedCards); // Verificar los datos obtenidos de la API

        const selectedCardIds =
          JSON.parse(localStorage.getItem("selectedCards")) || [];
        console.log("Selected Card IDs from localStorage:", selectedCardIds); // Verificar los IDs de las cartas seleccionadas

        const filteredCards = fetchedCards.filter((card) =>
          selectedCardIds.includes(card.id.toString())
        );
        console.log("Filtered Cards:", filteredCards); // Verificar las cartas filtradas

        setCards(filteredCards.length === 3 ? filteredCards : []);

        // Inicializar flippedCards con las cartas seleccionadas
        const initialFlippedCards = selectedCardIds.reduce((acc, id) => {
          acc[id] = true;
          return acc;
        }, {});
        setFlippedCards(initialFlippedCards);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchCards();
  }, []);

  const handleFlip = (id, flipped) => {
    setFlippedCards((prev) => ({ ...prev, [id]: flipped }));
  };

  if (!cards) return null;
  if (cards.length < 3) return null;

  return (
    <div className={styles.readingContainer}>
      {cards.map((card, index) => (
        <section
          key={card.id}
          className={
            index === 0
              ? styles.pastCardContainer
              : index === 1
              ? styles.presentCardContainer
              : styles.futureCardContainer
          }
        >
          <CardInfo
            name={card.spanishName}
            id={card.id}
            position={
              index === 0 ? "Pasado" : index === 1 ? "Presente" : "Futuro"
            }
          />
          <CardImage
            img={card.clowCard}
            id={card.id}
            flipped={flippedCards[card.id]}
            onFlip={handleFlip}
          />
          <CardMeaning meaning={card.meaning} id={card.id} />
        </section>
      ))}
    </div>
  );
}

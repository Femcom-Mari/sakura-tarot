// ReadingCard.jsx
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
        setCards(fetchedCards.length === 3 ? fetchedCards : []);
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

  console.log("cards", cards)

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
            name={card.spanishName} id={card.id} 
            position={index === 0 ? "Pasado" : index === 1 ? "Presente" : "Futuro"} />
          <CardImage 
            img={card.clowCard} id={card.id} />
          <CardMeaning 
            meaning={card.meaning} id={card.id} />
        </section>
      ))}
    </div>
  );
}

// ReadingCardInfo.jsx
import React from "react";
import styles from "./CardImage.module.css";
import { getData } from "../../api/api";
import{ useState, useEffect} from "react"




export default function CardImage({ selected, onClick}) {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setCards(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  if (!cards) {
    return null;
  }

  const { past, present, future } = cards;

  return (
    <section className={styles.cardImages}>
      <div
        className={`${styles.card} ${selected === past.id 
          ? styles.selected : ""}`}
        onClick={() => onClick(past.id)}
      >
        <img src={past.clowCard} alt="Dorso de la carta" className={styles.cardImage} />
      </div>

      <div
        className={`${styles.card} ${selected === present.id 
          ? styles.selected : ""}`}
        onClick={() => onClick(present.id)}
      >
        <img src={present.clowCard} alt="Dorso de la carta" className={styles.cardImage} />
      </div>

      <div
        className={`${styles.card} ${selected === future.id 
          ? styles.selected : ""}`}
        onClick={() => onClick(future.id)}
      >
        <img src={future.clowCard} alt="Dorso de la carta" className={styles.cardImage} />
      </div>
    </section>
  );
}








// ReadingCard.jsx
import styles from "./ReadingCard.module.css";
import CardImage from "../cardImage/CardImage";
import CardInfo from "../cardInfo/CardInfo";
import CardMeaning from "../CardMeaning/CardMeaning";

let id = 7;
let spanishName = "Salto";
let clowCard = "https://i.ibb.co/BfJYRBK/Salto.jpg";
let clowReverse = "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg";
let meaning = "Representa la evasión de los problemas.";

export default function ReadingCard({ id, name, kanji, img, text }) {
  return (
    <div className={styles.readingCardContainer}>
      <CardInfo name={name} kanji={kanji} id={id} />
      <CardImage img={img} text={text} id={id}>
        <CardMeaning text={text} />
      </CardImage>
    </div>
  );
}

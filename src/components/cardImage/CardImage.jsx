// ReadingCardInfo.jsx
import styles from "./CardImage.module.css";

let id = 7;
let spanishName = "Salto";
let clowCard = "https://i.ibb.co/BfJYRBK/Salto.jpg";
let clowReverse = "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg";
let meaning = "Representa la evasión de los problemas.";

export default function CardImage({ img, text, id }) {
  return (
    <div className={styles.cardImage}>
      <img src={img} alt={text} id={id} />
      <section className={styles.cardText}>
        <p>{text}</p>
      </section>
    </div>
  );
}

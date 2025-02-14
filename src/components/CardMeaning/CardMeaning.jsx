import styles from "./CardMeaning.module.css";

let id = 7;
let spanishName = "Salto";
let clowCard = "https://i.ibb.co/BfJYRBK/Salto.jpg";
let clowReverse = "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg";
let meaning = "Representa la evasión de los problemas.";

export default function CardMeaning({ text }) {
  return (
    <>
      <section className={styles.cardText}>
        <img src={clowCard} alt={spanishName} className={styles.cardImage} />
        <p>{meaning}</p>
      </section>
    </>
  );
}

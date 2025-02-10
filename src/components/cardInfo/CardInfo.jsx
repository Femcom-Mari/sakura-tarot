// ReadingCardTitle.jsx
import styles from "./CardInfo.module.css";

export default function CardInfo({ name, kanji, id }) {
  return (
    <section className={styles.cardTitle}>
      <h2>{name}</h2>
      <h2>{kanji}</h2>
      <h2>{id}</h2>
    </section>
  );
}

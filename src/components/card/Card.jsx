import styles from "./Card.module.css";

export default function Card({ id, name, kanji, img, text }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <section className={styles.cardTitle}>
          <h2>{name}</h2>
          <h2>{kanji}</h2>
          <h2>{id}</h2>
        </section>
        <div className={styles.cardInfo}>
          <img src={img} alt={text} />
          <section className={styles.cardText}>
            <p>{text}</p>
          </section>
        </div>
      </div>
    </>
  );
}

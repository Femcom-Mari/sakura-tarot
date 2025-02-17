import styles from "./CardMeaning.module.css";

export default function CardMeaning({ meaning }) {
  console.log("cardMeaning", meaning);

  return (
    <section className={styles.cardText}>
      <p>{meaning}</p>
    </section>
  );
}

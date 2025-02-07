import styles from "./Card.module.css";

export default function Card({ id, name, kanji, img, text }) {
  return (
    <>
      <div className={styles.reverseCard}></div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{kanji}</p>
      <img src={img} alt={text} />
      <p>{text}</p>
    </>
  );
}

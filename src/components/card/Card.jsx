import styles from "./Header.module.css";

export default function Card({ id, name, kanji, img, meaning }) {
  return (
    <>
      <div className={styles.reverseCard}></div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{kanji}</p>
      <img src={img} alt={meaning} />
      <p>{meaning}</p>
    </>
  );
}

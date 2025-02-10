import styles from "./Card.module.css";

function Card({ id, img, text }) {
  return (
    <>
      <h1>SELECCIONA 3 CARTAS</h1>
      <div className={styles.cardContainer}>
        <div className={styles.cardInfo}>
          <img src={img} id={id} alt={text} />
        </div>
      </div>
    </>
  );
}

export default Card;

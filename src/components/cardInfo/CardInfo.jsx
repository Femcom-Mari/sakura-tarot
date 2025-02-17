import styles from "./CardInfo.module.css";

export default function CardInfo({ name, id, position }) {
  return (
    <div className={styles.cardInfo}>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
}

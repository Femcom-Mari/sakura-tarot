import styles from "./CardInfo.module.css";

export default function CardInfo({ name, id, position}) {
  return (
    <section className={styles.cardTitle}>
        <h2>Carta {position}</h2>
        <br/>
        <h2>{name}</h2>
    </section>
  );
}

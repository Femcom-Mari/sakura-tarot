import styles from "./Reading.module.css";
import ReadingCard from "../../components/readingCard/ReadingCard";
import CardImage from "../../components/cardImage/CardImage";

let id = 7;
let spanishName = "Salto";
let kanji = "跳";
let Rōmaji = "Odo";
let clowCard = "https://i.ibb.co/BfJYRBK/Salto.jpg";
let clowReverse = "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg";
let meaning = "Representa la evasión de los problemas.";

export default function Reading() {
  return (
    <>
      <h2 className={styles.titulo1}>COMPONENTE PAGINA READING</h2>
      <ReadingCard
        id={id}
        name={spanishName}
        kanji={kanji}
        img={clowCard}
        text={meaning}
      />
      <CardImage img={clowCard} text={meaning} id={id} />
    </>
  );
}

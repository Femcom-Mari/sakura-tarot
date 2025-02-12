import styles from "./Reading.module.css";
import ReadingCard from "../../components/readingCard/ReadingCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
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
    <header className={styles.header}>
      <Navbar/>
      </header>

    <main className={styles.reading}>
      <ReadingCard
        id={id}
        name={spanishName}
        kanji={kanji}
        img={clowCard}
        text={meaning}
      />
        <ReadingCard
          id={id}
          name={spanishName}
          kanji={kanji}
          img={clowCard}
          text={meaning}
        />
      </main>  
      <footer className={styles.footer}>
      <Footer />
      </footer>
    </>
  );
}

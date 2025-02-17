import styles from "./Reading.module.css";
import ReadingCard from "../../components/readingCard/ReadingCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "./../../components/button/Button.jsx";
import CardImage from "../../components/cardImage/CardImage";
import background from "../../assets/images/background-image.jpg";
import CardsFaceDown from "../../components/cardsFaceDown/CardsFaceDown";

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
        <Navbar />
      </header>

      <main className={`${styles.reading} ${styles.background}`}>
        <CardsFaceDown />
        <Button text={"Visualiza tu lectura"}/>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

import styles from "./Reading.module.css";
import ReadingCard from "../../components/readingCard/ReadingCard";
import Header from "../../components/header/Header";
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
      <Header />
      <h2 className={styles.titulo1}>COMPONENTE PAGINA READING</h2>

      <Footer />
    </>
  );
}

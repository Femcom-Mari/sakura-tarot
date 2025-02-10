import styles from "./Reading.module.css";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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
    <Header/>
      <h2 className={styles.titulo1}>COMPONENTE PAGINA READING</h2>
      <Card
        id={id}
        name={spanishName}
        kanji={kanji}
        img={clowReverse}
        text={meaning}
        alt={meaning}
      />
      <Card
        id={id}
        name={spanishName}
        kanji={kanji}
        img={clowCard}
        text={meaning}
        alt={meaning}
        
      />
      <Footer/>
    </>
  );
}

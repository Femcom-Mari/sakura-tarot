
import styles from "./Meaning.module.css";
import ReadingCard from "../../components/readingCard/ReadingCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardImage from "../../components/cardImage/CardImage";
import background from "../../assets/images/background-image.jpg";
import CardsFaceDown from "../../components/cardsFaceDown/CardsFaceDown";

let id = 7;
let spanishName = "Salto";
let kanji = "跳";
let Rōmaji = "Odo";
let clowCard = "https://i.ibb.co/BfJYRBK/Salto.jpg";
let clowReverse = "https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg";

export default function Meaning() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "0",
    padding: "0",
    display: "flex",
  };
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.meaning} style={myStyle}>
        <ReadingCard />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

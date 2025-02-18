import styles from "./Reading.module.css";
import ReadingCard from "../../components/readingCard/ReadingCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "./../../components/button/Button.jsx";
import CardImage from "../../components/cardImage/CardImage";
import background from "../../assets/images/background-image.jpg";
import CardsFaceDown from "../../components/cardsFaceDown/CardsFaceDown";

export default function Reading() {

  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={`${styles.reading} ${styles.background}`}>
        <CardsFaceDown />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

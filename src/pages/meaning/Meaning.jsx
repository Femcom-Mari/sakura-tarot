
import styles from "./Meaning.module.css";
import ReadingCard from "../../components/readingCard/ReadingCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardImage from "../../components/cardImage/CardImage";
import background from "../../assets/images/background-image.jpg";
import CardsFaceDown from "../../components/cardsFaceDown/CardsFaceDown";

export default function Meaning() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={`${styles.meaning} ${styles.background}`}>
        <ReadingCard />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

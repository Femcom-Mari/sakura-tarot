import styles from "./History.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import background from "../../assets/images/background-image.jpg";
export default function History() {
  return (
    <>
    <header className={styles.header}>
     <Navbar/>
     </header>
     <main className={`${styles.history} ${styles.background}`}>
      </main>
      <footer className={styles.footer}>
      <Footer/>
      </footer>
    </>
  );
}

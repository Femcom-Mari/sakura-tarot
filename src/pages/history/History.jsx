import styles from "./History.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
export default function History() {
  return (
    <>
    <header className={styles.header}>
     <Navbar/>
     </header>
     <main className={styles.history}>
      </main>
      <footer className={styles.footer}>
      <Footer/>
      </footer>
    </>
  );
}

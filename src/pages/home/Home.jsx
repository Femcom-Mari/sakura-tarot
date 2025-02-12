import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <>
     <header className={styles.header}>
      <Navbar/>
      </header>
      <main className={styles.home}>
      <Button
      text="Registrarse"/>
      </main>
      <footer className={styles.footer}>
      <Footer/>   
      </footer>
    </>
  );
}

import styles from "./Introduction.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./../../components/form/Form.jsx";

function Introduction() {
  return (
    <>
    <header className={styles.header}>
    <Navbar/>
    </header>
    <main className={styles.introduction}>
    <Form />
    </main>
    <footer className={styles.footer}>
    <Footer/>
    </footer>
    </>
  );
}

export default Introduction

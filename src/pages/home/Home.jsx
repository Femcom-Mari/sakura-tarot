import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./../../components/form/Form.jsx";

function Home() {
  return (
    <>
     <header className={styles.header}>
      <Navbar/>
      </header>
      <main className={styles.home}>
      <Form />
      </main>
      <footer className={styles.footer}>
      <Footer/>   
      </footer>
    </>
  );
}

export default Home

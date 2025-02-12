import styles from "./Instructions.module.css";
import Button from "../../components/button/Button"




import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
export default function Instructions() {
  return (
    <>
    <header className={styles.header}>
    <Navbar/>
    </header>
    <main className={styles.instructions}>
      <Button
       text="Comenzar"/>
       </main>
       <footer className={styles.footer}>
          <Footer/>
          </footer> 
    </>
  );
}

import styles from "../instructions/Instructions.module.css";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import sakura from "../../assets/images/sakura-logo.png";
import { useNavigate } from "react-router-dom";

function Instructions() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/reading");
  };

  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={`${styles.instructions} ${styles.background}`}>
        <div className={styles.logo}>
          <img src={sakura} alt="sakura-logo" />
          <p className={styles.paragraph}>
            Hola, que las cartas del tarot revelen tu camino de hoy.<br /><br />
            Pensamos en ti y en nuestra parte superior de la pantalla podrás cancelar el sonido y reiniciar la sección del tarot cuando lo desees.<br /><br />
            Obtendrás el significado oculto del pasado, presente y futuro.<br /><br />
            Donde podrás detenerte a leer el historial en la parte inferior de la pantalla, dejando las lecturas que resuenen contigo y eliminando las que quieres dejar atrás en tu vida.<br />
          </p>
        </div>
        <Button text="Comenzar" onClick={handleStartClick} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default Instructions;

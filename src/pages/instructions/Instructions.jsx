import styles from "./Instructions.module.css";
import Button from "../../components/button/Button"




import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
export default function Instructions() {
  return (
    <>
    <Navbar/>
      <h2 className={styles.titulo1}>COMPONENTE PAGINA INSTRUCTIONS</h2>
      <Button
       text="Comenzar"/>
          <Footer/>
    </>
  );
}

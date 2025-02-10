import styles from "./Instructions.module.css";
import Button from "../../components/button/Button"




import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
export default function Instructions() {
  return (
    <>
    <Header/>
      <h2 className={styles.titulo1}>COMPONENTE PAGINA INSTRUCTIONS</h2>
      <Button
       text="Comenzar"/>
          <Footer/>
    </>
  );
}

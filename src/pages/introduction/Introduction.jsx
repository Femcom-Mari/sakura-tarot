import styles from "./Introduction.module.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Form from "./../../components/form/Form.jsx";

function Introduction() {
  return (
    <>
    <Header/>
      <h2 className={styles.titulo1}>COMPONENTE PAGINA INTRODUCTION</h2>
      <Form />
      <Footer/>
    </>
  );
}

export default Introduction

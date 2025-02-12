import styles from "./Introduction.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./../../components/form/Form.jsx";

function Introduction() {
  return (
    <>
    <Navbar/>
      <h2 className={styles.titulo1}>COMPONENTE PAGINA INTRODUCTION</h2>
      <Form />
      <Footer/>
    </>
  );
}

export default Introduction

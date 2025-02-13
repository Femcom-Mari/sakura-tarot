import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./../../components/form/Form.jsx";
import { getData } from "../../api/api.jsx";

function Home() {
  //PARA VISUALIZAR LA FUNCTION getData
  useEffect(() => {
    getData();
  }, []);
  //BORRAR LUEGO
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

import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./../../components/form/Form.jsx";
import { getData } from "../../api/api.jsx";
import sakura from "../../assets/images/sakura-logo.png"

function Home() {
  return (
    <>
     <header className={styles.header}>
      <Navbar/>
      </header>
      <main className={`${styles.home} ${styles.background}`}>
      <div className={styles.logo}>
          <img src={sakura} alt="sakura-logo" />
          <p>Te damos la bienvenida,
          Por favor inserta tu nombre</p>
        </div>
        <div className={styles.form}>  
      <Form /> 
      </div>
      </main>
      <footer className={styles.footer}>
      <Footer/>   
      </footer>
    </>
  );
}

export default Home

import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./../../components/form/Form.jsx";
import { getData } from "../../api/api.jsx";
import background from "../../assets/images/background-image.jpg";
import sakura from "../../assets/images/sakura-logo.png"
function Home() {
   const myStyle = {
        backgroundImage: `url(${background})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "0",
        padding: "0",
        display: "flex",
      };
  return (
    <>
     <header className={styles.header}>
      <Navbar/>
      </header>
      <main className={styles.home} style={myStyle}>
      <div className={styles.logo}>
          <img src={sakura} alt="sakura-logo" />
          <p>Te damos la bienvenida,
          Por favor inserta tu nombre</p>
        </div>
      <Form />
      </main>
      <footer className={styles.footer}>
      <Footer/>   
      </footer>
    </>
  );
}

export default Home

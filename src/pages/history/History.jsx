import React, { useEffect } from "react";
import styles from "./History.module.css";
import Footer from "../../components/footer/Footer";
import HistoryCard from "../../components/historyCard/historyCard";
import skipIcon from "../../assets/images/skipIcon.png";
import Button from "../../components/button/Button";
import Navbar from "../../components/Navbar/Navbar";

export default function History() {
  return (
    <> 
      <header>
          <Navbar/>
      </header>
        <main>

          <div className= {styles.Support} >
              <div className={styles.mainHeader}>
              <p>Refleciona sobre la sabiduria en nuestro <b>Historial</b></p>
              <img src={skipIcon} alt="Skip page" className=  {styles.logo}/> 
            </div>

            <div>
               <HistoryCard/>
                 <HistoryCard/>
               <HistoryCard/>
            </div> 
            <div className={styles.contentButton}>
            <Button text="Volver a la pagina principal" />
            <Button text="Borrar historial"/>
            </div>
          </div>
        </main>
    
      <footer className={styles.footer}>
          <Footer/>
      </footer>
    </>
  );
}


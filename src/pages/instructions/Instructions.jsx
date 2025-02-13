import styles from "./Instructions.module.css";
import Button from "../../components/button/Button"




import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import background from "../../assets/images/background-image.jpg";
export default function Instructions() {
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
    <main className={styles.instructions}style={myStyle}>
      <Button
       text="Comenzar"/>
       </main>
       <footer className={styles.footer}>
          <Footer/>
          </footer> 
    </>
  );
}

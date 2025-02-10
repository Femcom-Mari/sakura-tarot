import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button"
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <>
     
      <Header />
      <Button
      text="Registrarse"/>

      <Footer/>    
    </>
  );
}

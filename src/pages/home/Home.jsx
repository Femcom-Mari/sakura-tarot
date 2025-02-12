import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <>
     
      <Navbar/>
      <Button
      text="Registrarse"/>

      <Footer/>    
    </>
  );
}

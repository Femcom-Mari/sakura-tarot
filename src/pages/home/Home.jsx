import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Form from "./../../components/form/Form.jsx";

function Home() {
  return (
    <>
    <Navbar/>
    <Form />
    <Footer/>
    </>
  );
}

export default Home

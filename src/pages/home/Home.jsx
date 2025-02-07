import styles from "./Home.module.css";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
      <h2 className={styles.titulo1}>COMPONENTE PAGINA HOME</h2>
      <Header />
    </>
  );
}

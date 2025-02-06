import styles from "./Home.module.css";
import Header from "../../components/header/Header";
export default function Home() {
  return (
    <>
      <Header />
      <h2 className={styles.titulo1}>Debo importar aqui el componente main</h2>
      <p className={styles.p1}>Debo importar aqui el componente footer</p>
      <p className={styles.p2}>Welcome to my app</p>
    </>
  );
}

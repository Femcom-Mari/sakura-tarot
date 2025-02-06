import styles from "./Header.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.titulo1}>
        Debo importar aqui el componente logo con su texto
      </h1>
      <h2 className={styles.titulo2}>
        Debo importar aqui el componente x que tambien vaya en header
      </h2>
    </>
  );
}

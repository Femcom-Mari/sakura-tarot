import { NavLink } from "react-router";
import styles from "./Footer.module.css";

export default function Home() {
    return (
        <div className={styles.footer}>
        <NavLink className={styles.text} to={"/instructions"}>Instrucciones</NavLink>
        <NavLink className={styles.text} to={"/history"}>Historial</NavLink>
      
      </div>
    );
  }
  
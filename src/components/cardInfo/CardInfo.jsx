import styles from "./CardInfo.module.css";
import { getData } from "../../api/api";
import{ useState, useEffect} from "react"

export default function CardInfo() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setCards(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  if (!cards) {
    return null;
  }

  const { past, present, future } = cards;
  
  return (
    <section className={styles.cardTitle}>
    <div>
      <h2>Pasado: {past.spanishName}</h2>
      <h2>ID: {past.id}</h2>
    </div>

    <div>
      <h2>Presente: {present.spanishName}</h2>
      <h2>ID: {present.id}</h2>
    </div>

    <div>
      <h2>Futuro: {future.spanishName}</h2>
      <h2>ID: {future.id}</h2>
    </div>
  </section>
);
}

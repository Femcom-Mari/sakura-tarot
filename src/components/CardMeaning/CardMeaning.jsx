import styles from "./CardMeaning.module.css";
import { getData } from "../../api/api";
import{ useState, useEffect} from "react"

export default function CardMeaning() {
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
    <>(
    <section className={styles.cardText}>
      <div>
        <h2>Past: {past.spanishName}</h2>
        <img src={past.clowCard} alt={`Esta carta es la carta ${past.spanishName}`} />
        <p>{past.meaning}</p>
      </div>

      <div>
        <h2>Present: {present.spanishName}</h2>
        <img src={present.clowCard} alt={`Esta carta es la carta ${present.spanishName}`} />
        <p>{present.meaning}</p>
      </div>

      <div>
        <h2>Future: {future.spanishName}</h2>
        <img src={future.clowCard} alt={`Esta carta es la carta ${future.spanishName}`} />
        <p>{future.meaning}</p>
      </div>
    </section>
    );
    </>
  );
}

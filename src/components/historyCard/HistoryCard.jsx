import Button from "../button/Button.jsx";
import styles from "../historyCard/HistoryCard.module.css"



function HistoryCard () {
  return (
<div className={styles.bkContainer}>
  <div className={styles.headerCard}>
    <p>Lola</p>
    <Button text="Borrar"/>
  </div>
  <div className={styles.apiContent}>
    <p>Presente La Sombra</p>
    <p>Simboliza la librertas, la evasión</p>
  </div>
  <div className={styles.date}>
    <p>fecha</p>
  </div>
</div>

  )
}

export default HistoryCard
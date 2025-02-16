import Button from "../button/Button.jsx";
import styles from "../historyCard/HistoryCard.module.css"



function HistoryCard () {
  return (
<div className={styles.bkContainer}>
  <div className={styles.headerCard}>
    <p>Lola</p>
    <p>fecha</p>
    
  </div>
  <div className={styles.apiContent}>
    <p>Presente La Sombra</p>
    <p>Simboliza la librertas, la evasión</p>
  </div>
  <div className={styles.date}>
  <Button text="Borrar"/>
    
  </div>
</div>

  )
}

export default HistoryCard
import styles from "../button/Button.module.css";


function Button ({text}) {
  return (
    <div>
        <button className={styles.register}>{text}</button>
    </div>
  );
}

export default Button;
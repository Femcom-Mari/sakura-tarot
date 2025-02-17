import styles from "../button/Button.module.css";

function Button({ text, onClick, type = "button", disabled }) {
  return (
    <button className={styles.register} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;

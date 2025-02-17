import styles from "../button/Button.module.css";
import { NavLink } from "react-router";


function Button ({text, to}) {
  return (
    <div> 
        <NavLink to={to}>
          <button className={styles.register}>{text}</button>
        </NavLink>
    </div>
  );
}

export default Button;
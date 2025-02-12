import styles from "./Form.module.css"
import Button from "../../components/button/Button";


function Form (){
    return(
        <>
        <form className={styles.formContainer}>
            <label className={styles.formLabel}htmlFor="username">
                <p className={styles.formText}>Nombre:</p>
                <input className={styles.formInput}type="text"
                id="username"
                />
            </label>
            <Button text={"Validar"}/>
        </form> 
        </>
    )
}

export default Form
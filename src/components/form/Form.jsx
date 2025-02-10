import styles from "./Form.module.css"


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
        </form> 
        </>
    )
}

export default Form
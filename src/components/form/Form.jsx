import styles from "./Form.module.css"
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";

function Form (){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Username:", data);
    };
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <label className={styles.formLabel} htmlFor="username">
                <p className={styles.formText}>Nombre:</p>
                <input className={styles.formInput}type="text"
                id="username"
                {...register("username", {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9]{3,20}$/,
                        },
                  })}
                />
                {errors.username && <p className={styles.errorText}>Username error</p>}
            </label>
            <Button text={"Registrarse"} type="submit" />
        </form> 
        </>
    )
}

export default Form
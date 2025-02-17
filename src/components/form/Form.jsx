import styles from "./Form.module.css";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
      if (!data.username || data.username.length < 3) {
        return; 
      }
      navigate("/instructions"); 
    };


return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label className={styles.formLabel} htmlFor="username">
        <p className={styles.formText}>Nombre:</p>
        <input
          className={styles.formInput}
          type="text"
          id="username"
          {...register("username", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9]{3,20}$/,
            },
          })}
        />
        {errors.username && (
          <p className={styles.errorText}>
            El nombre de usuario no es válido.
            <br />
            Debe tener al menos tres caracteres.
          </p>
        )}
      </label>
      <Button text={"Validar"} type="submit" />
    </form>
  );
}

export default Form;
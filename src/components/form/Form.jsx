import styles from "./Form.module.css";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [savedData, setSavedData] = useState({ username: '', time: '' });

    useEffect(() => {
        // Recupera los datos de localStorage cuando se cargue el componente
        const username = localStorage.getItem('username');
        const time = localStorage.getItem('time');
        if (username && time) {
            setSavedData({ username: username, time: time });
        }
    }, []);

    const onSubmit = (data) => {
        const currentTime = new Date().toLocaleDateString("es-ES");
        // Guarda el nombre y la hora en localStorage
        /*localStorage.setItem('username', data.username);*/
        window.localStorage.setItem('username', data.username);
        localStorage.setItem('time', currentTime);
        setSavedData({ username: data.username, time: currentTime });
        console.log("Username:", data.username);
        console.log("date:", currentTime);
        console.log(localStorage);
        console.log("Data:", data);
    };

    return (
        <>
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
                    {errors.username && <p className={styles.errorText}>Username error</p>}
                </label>
                <Button text={"Validar"} type="submit" />
            </form>
            {savedData.username && savedData.time && (
                <div className={styles.savedData}>
                    <p>Nombre guardado: {savedData.username}</p>
                    <p>Fecha guardada: {savedData.time}</p>
                </div>
            )}
        </>
    );
}

export default Form;
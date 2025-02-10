import "./Form.module.css"


function Form (){
    return(
        <>
        <form>
            <label for="username">
                <p>¡Introduce tu nombre!</p>
                <input type="text"
                id="username"
                />
            </label>
        </form> 
        </>
    )
}

export default Form
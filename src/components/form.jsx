import React, { useState} from "react";
import "../style/form.css"
import {v4 as uuidv4} from "uuid";

function Form(props){

    const [input, setInput] = useState("");
    
   const  manejarCambio = e => {
    setInput(e.target.value);
    
    }

    const manejarEnvio = e => {
        e.preventDefault();
      
        const newTask = {
            id: uuidv4(),
            texto: input,
            completada: false,
        }

        props.onSubmit(newTask);
    }


    return (
<form className="task_form"
onSubmit={manejarEnvio}>
    <input
    className="task_input"
    type="text"
    placeholder="Escribir tarea"
    name="texto"
    onChange={manejarCambio}
    />
    <button className="task_button">Sumar tarea</button>
</form>
    )
}

export default Form;
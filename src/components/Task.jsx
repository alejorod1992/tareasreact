import React from "react";
import "../style/task.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Task({id, texto, completada, completarTarea, eliminarTarea }) {
    return (

        <div className={completada ? "task_container completada" : "task_container"} >
            <div className="task_text"
                onClick={()=> completarTarea(id)}>
                {texto}
            
            </div>
            <div className="task_icon_container"
            onClick={()=> eliminarTarea(id)}>
          
            <AiFillCloseCircle className="task_icon"/>
           

            </div>
        </div>
    )
}

export default Task
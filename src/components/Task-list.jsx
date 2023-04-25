import React, { useState } from "react";
import Form from "./form";
import Task from "./Task";
import "../style/TaskList.css"


function TaskList() {


    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.texto.trim()) {
            task.texto = task.texto.trim();

            const tareasActualizadas = [task, ...tasks];
            setTasks(tareasActualizadas);



        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tasks.filter(task => task.id !== id);
        setTasks(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tasks.map (task => {
            if(task.id === id) {
                task.completada = !task.completada;
            }
            return task;
        });
        setTasks(tareasActualizadas);
    }




    return (
        <>
            <Form onSubmit={addTask} />
            
            <div className="task-list_container">
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            texto={task.texto}
                            completada={task.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}

                        />

                    )
                }
            </div>
        </>
    )
}

export default TaskList;
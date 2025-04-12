import { useState } from "react";

function TaskForm({ addTask}) {
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskText);
        setTaskText('');
    }
    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Agregar tarea"
                className="form-control"
                name="task"
                id="task"
            />
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    );
}

export default TaskForm;
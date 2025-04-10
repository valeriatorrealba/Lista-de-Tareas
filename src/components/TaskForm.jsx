import { useState } from "react";

export default function TaskForm({ addTask }) {
    const [task, setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask('');
    }
    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Agregar tarea"
                className="form-control"
                name="task"
                id="task"
            />
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    );
}
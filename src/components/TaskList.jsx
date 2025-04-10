export default function TaskList({ tasks, deleteTask, completeTask }) {
    return(
        <ul className="list-group">
            {tasks.map((task) => (
                <li
                key={task.id} className={`list-group-item d-flex justify-content-between align-items-center p-3 list-group-item-action ${task.done ? "bg-success-subtle" : "" }`}
                onClick={() => completeTask(task.id)}>
                    <span
            className={`${task.done ? "text-decoration-line-through" : ""}`}>
                    {task.task}
                    </span>
                    <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">Eliminar</button>
                </li>
            ))}
        </ul>
    )
}
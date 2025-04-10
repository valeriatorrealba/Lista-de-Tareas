import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { completeTask, createTask, eraseTask, findAll } from "./services/TasksService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await findAll();
      setTasks(data);
    };

    fetchData();
  }, [tasks]);

  const addTask = async (task) => {
    if (!task || task.trim() === "") {
      setError("La tarea no puede estar vacía");
      return;
    }

    await createTask({
      task: task,
      done: false,
      id: `${Math.random() * 10000 + 1}`,
    });

    setError("");
  };

  const deleteTask = async (id) => {
    await eraseTask(id);
  };

  const complete = async (id) => {
    const task = tasks.find((task) => task.id === id);
    await completeTask(id, !task.done);
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center">Lista de Tareas</h1>
      {error && <p className="text-danger">{error}</p>}
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={complete} />
    </div>
  );
}

export default App;
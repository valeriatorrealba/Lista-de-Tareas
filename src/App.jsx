import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setTasks([
      { id: "1", task: "Tarea 1", done: false },
      { id: "2", task: "Tarea 2", done: false },
      { id: "3", task: "Tarea 3", done: false },
    ]);
  }, []);

  const addTask = (taskText) => {
    if (!taskText || taskText.trim() === "") {
      setError("La tarea no puede estar vacía");
      return;
    }

    const newTask = {
      task: taskText,
      done: false,
      id: `${Date.now()}`,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setError("");
  };

  const deleteTask = async (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const complete = async (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

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
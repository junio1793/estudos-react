import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function TesteApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1231231231231,
      title: "estudar React",
      description: "Estudar programacao para aprender react",
      isCompleted: false,
    },
    {
      id: 5345345345,
      title: "estudar Java",
      description: "Estudar programacao para aprender Java",
      isCompleted: false,
    },
    {
      id: 234234,
      title: "estudar JavaScript",
      description: "Estudar programacao para aprender Java",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    console.log(newTask.id);
  }

  return (
    <div className="w-screen h-screen bg-red-300 flex justify-center p-10">
      <div className="w-[600px] flex flex-col gap-4 ">
        <h1 className="text-4xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        ></Tasks>
      </div>
    </div>
  );
}
export default TesteApp;

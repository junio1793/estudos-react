import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function TesteApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1561651561561,
      title: "estudar React",
      description: "Estudar programacao para aprender react",
      isCompleted: false,
    },
    {
      id: 1561651561561,
      title: "estudar Java",
      description: "Estudar programacao para aprender Java",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-10">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          gerenciador de tarefas
        </h1>
        <AddTask></AddTask>
        <Tasks tasks={tasks}></Tasks>
      </div>
    </div>
  );
}
export default TesteApp;

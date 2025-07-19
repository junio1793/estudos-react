import { ChevronRightIcon, Fan } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-5 p-6 bg-gray-950 rounded-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-black p-2 rounded-md 
              ${task.isCompleted && "line-through"}`}
          >
            {task.title}
            {task.isCompleted ? " Is Completed" : " Is Not Completed"}
          </button>
          <button className="bg-slate-400 P-2 rounded-md text-black">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-slate-400 P-2 rounded-md text-black"
          >
            <Fan />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

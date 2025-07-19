import { ChevronRightIcon, Beef } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-5 p-6 bg-black rounded-md bg-opacity-60	">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-emerald-600 w-full text-left text-black p-2 rounded-md 
              ${task.isCompleted && "line-through"}`}
          >
            {task.title}
            {task.isCompleted ? " Is Completed" : " Is Not Completed"}
          </button>
          <button className="bg-emerald-600 P-2 rounded-md text-black">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-emerald-600 P-2 rounded-md text-black"
          >
            <Beef />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

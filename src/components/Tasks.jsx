import { ChevronRightIcon, Beef } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = new useNavigate();

  function onSeeDetailsOnClick(task) {
    const queryParam = new URLSearchParams();

    queryParam.set("title", task.title);
    queryParam.set("description", task.description);

    navigate(`/taskPage?${queryParam.toString()}`);
  }

  return (
    <ul className="space-y-5 p-6 bg-black rounded-md bg-opacity-60">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-neutral-500 w-full text-left text-black p-2 rounded-md 
              ${task.isCompleted && "line-through"}`}
          >
            {task.title}
            {task.isCompleted ? " Is Completed" : " Is Not Completed"}
          </button>

          <Button onClick={() => onSeeDetailsOnClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Beef />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

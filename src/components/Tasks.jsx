import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow red">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
          <button className="bg-slate-400 w-full text-left text-white p-2 rounded-md">
            {task.title}
          </button>
          <button>
            <ChevronRightIcon className="bg-slate-400 P-2 rounded-md text-white"></ChevronRightIcon>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center p-10 ">
      <div className="w-[600px] flex flex-col gap-4 ">
        <div className="flex justify-center relative">
          <button
            className="absolute left-0 top-0"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>

          <h1 className="text-3xl text-black font-bold text-center">
            Detalhes...
          </h1>
        </div>

        <div className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col bg-opacity-50">
          <h2 className="text-xl font-extrabold text-white ">{title}</h2>
          <h3 className="text-x font-sans text-white ">{description}</h3>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

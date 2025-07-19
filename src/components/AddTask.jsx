import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("teste");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col bg-opacity-60">
      <input
        type="text"
        placeholder="Digite o titulo"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Digite a descricao"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="bg-slate-500 text-white px-4 py2 rounded-md font-medium"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha as informações necessarias!!!!!!");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

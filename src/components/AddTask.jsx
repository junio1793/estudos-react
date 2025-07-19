import { useState } from "react";
import Input from "./inputs";
import BlockOriginal from "./BlockOriginal";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <BlockOriginal>
      <Input
        type="text"
        placeholder="Digite o titulo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descricao"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="bg-neutral-500 text-white px-4 py2 rounded-md font-medium"
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
    </BlockOriginal>
  );
}

export default AddTask;

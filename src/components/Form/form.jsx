import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
  const { onSave } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("TODO");

  const handleSave = () => {
    if (name && description && state) {
      const task = {
        name,
        description,
        state,
        dateTime: new Date().toISOString(),
        id: uuidv4(),
      };
      onSave(task);
      setName("");
      setDescription("");
      setState("TODO");
    }
  };

  return (
    <div>
      <input
        placeholder="Nome da tarefa"
        className="task-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Descrição"
        className="task-field"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="task-field"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <button className="save-button" onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
}

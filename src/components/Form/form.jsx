import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export default function Form(props) {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("TODO");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!name || !description || !state) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const task = {
      name,
      description,
      state,
      dateTime: new Date().toISOString(),
      userId: user?.uid,
      taskId: crypto.randomUUID(),
    };

    try {
      setLoading(true);
      const tasksRef = collection(db, "tasks");
      await addDoc(tasksRef, task);
      alert("Task salva com sucesso!");

      setName("");
      setDescription("");
      setState("TODO");
    } catch (error) {
      console.error("Erro ao salvar a task:", error.message);
      alert("Erro ao salvar a task.");
    } finally {
      setLoading(false);
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
      <button className="save-button" onClick={handleSave} disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </button>
    </div>
  );
}

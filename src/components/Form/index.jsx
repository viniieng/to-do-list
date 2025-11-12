import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import "./form.css";

export default function Form() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("TODO");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSave = async () => {
    if (!name || !description || !state) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    const task = {
      name,
      description,
      state,
      dateTime: new Date().toLocaleDateString("pt-BR"),
      userId: user?.uid,
      taskId: crypto.randomUUID(),
    };

    try {
      setLoading(true);
      const tasksRef = collection(db, "tasks");
      await addDoc(tasksRef, task);

      setName("");
      setDescription("");
      setState("TODO");
      setErrorMessage("");
    } catch (error) {
      console.error("Digite todos os campos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>CRIAR NOVA TAREFA</h3>
      <div className="form-input">
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
          <option value="TODO">A fazer</option>
          <option value="DOING">Fazendo</option>
          <option value="DONE">Feito</option>
        </select>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
      <button className="save-button" onClick={handleSave} disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </button>
    </div>
  );
}

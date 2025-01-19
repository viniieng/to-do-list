import React from "react";
import "./styles.css";

export const EditTaskModal = ({
  isOpen,
  task,
  onClose,
  onSave,
  onChangeTask,
}) => {
  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Editar Task</h3>
        <input
          type="text"
          value={task.name}
          onChange={(e) => onChangeTask({ ...task, name: e.target.value })}
          placeholder="Nome da task"
        />
        <textarea
          value={task.description}
          onChange={(e) =>
            onChangeTask({ ...task, description: e.target.value })
          }
          placeholder="Descrição da task"
        />
        <select
          value={task.state}
          onChange={(e) => onChangeTask({ ...task, state: e.target.value })}
        >
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </select>
        <button onClick={() => onSave(task)}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

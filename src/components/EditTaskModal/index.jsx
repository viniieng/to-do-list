import React from "react";
import "./styles.css";

export const EditTaskModal = ({
  isOpen,
  task,
  onClose,
  onSave,
  onChangeTask,
}) => {
  if (!isOpen) return null;

  return (
    <div className="edit-task-modal-overlay">
      <div className="edit-task-modal-content">
        <h3 className="edit-task-modal-title">Editar Task</h3>
        <input
          type="text"
          className="edit-task-modal-input"
          value={task.name}
          onChange={(e) => onChangeTask({ ...task, name: e.target.value })}
          placeholder="Nome da task"
        />
        <input
          className="edit-task-modal-input"
          value={task.description}
          onChange={(e) =>
            onChangeTask({ ...task, description: e.target.value })
          }
          placeholder="Descrição da task"
        />
        <select
          className="edit-task-modal-select"
          value={task.state}
          onChange={(e) => onChangeTask({ ...task, state: e.target.value })}
        >
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </select>
        <div className="edit-task-modal-buttons">
          <button
            className="edit-task-modal-button save"
            onClick={() => onSave(task)}
          >
            Salvar
          </button>
          <button className="edit-task-modal-button cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

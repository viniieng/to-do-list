import React from "react";
import "./confirmDeleteModal.css";

export const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, task }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-delete-modal-overlay">
      <div className="confirm-delete-modal">
        <h3>Tem certeza que deseja excluir essa tarefa?</h3>
        <p>
          <strong>{task?.name}</strong>
        </p>
        <div className="confirm-delete-buttons">
          <button onClick={onConfirm} className="confirm-button">
            Confirmar
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

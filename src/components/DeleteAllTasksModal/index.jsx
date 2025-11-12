import React from "react";
import "./styles.css";

export const DeleteAllTasksModal = ({ isOpen, onClose, onConfirm, taskCount }) => {
    if (!isOpen) return null;

    return (
        <div className="delete-all-modal-overlay">
            <div className="delete-all-modal-content">
                <div className="delete-all-modal-icon">
                    <box-icon name="error" color="#ff6b6b" size="lg"></box-icon>
                </div>
                <h3 className="delete-all-modal-title">Excluir todas as tarefas?</h3>
                <p className="delete-all-modal-message">
                    Você está prestes a excluir <strong>{taskCount}</strong> {taskCount === 1 ? "tarefa" : "tarefas"}.
                    Esta ação não pode ser desfeita!
                </p>
                <div className="delete-all-modal-buttons">
                    <button className="delete-all-modal-button cancel" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="delete-all-modal-button confirm" onClick={onConfirm}>
                        Sim, excluir todas
                    </button>
                </div>
            </div>
        </div>
    );
};


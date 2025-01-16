import React from "react";

export default function List(props) {
  const { tasks } = props;
  return (
    <div className="tasks-list">
      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          <span>{task}</span>
          <div className="actions">
            <button onClick={() => console.log(`Excluir: ${task}`)}>
              Excluir
            </button>
            <button onClick={() => console.log(`Completar: ${task}`)}>
              Completar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

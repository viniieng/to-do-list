import React from "react";
import "boxicons";
import "./card.css";

export default function Card(props) {
  const { task, onEdit, onDelete } = props;

  const { name, description, state, dateTime } = task;

  const getStateClass = (state) => {
    switch (state) {
      case "TODO":
        return "card-state-todo";
      case "DOING":
        return "card-state-doing";
      case "DONE":
        return "card-state-done";
      default:
        return "";
    }
  };

  const getStateText = (state) => {
    switch (state) {
      case "TODO":
        return "A fazer";
      case "DOING":
        return "Fazendo";
      case "DONE":
        return "Feito";
      default:
        return state;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-name">{name}</h2>
      </div>
      <p className="card-description">{description}</p>
      <span className={`card-state ${getStateClass(state)}`}>{getStateText(state)}</span>
      <div className="card-buttons">
        <button className="card-edit-button" onClick={onEdit}>
          <box-icon name="edit-alt" color="gray"></box-icon>
        </button>
        <button onClick={onDelete}>
          <box-icon name="message-alt-x" color="gray" type="solid"></box-icon>
        </button>
      </div>
      <div className="card-datetime">
        <span>{dateTime.toLocaleString()}</span>
      </div>
    </div>
  );
}

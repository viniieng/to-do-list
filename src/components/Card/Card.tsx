import React from "react";
import "./style.css";

export default function Card(props) {
  const { name, description, state, dateTime, id } = props;

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

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-name">{name}</h2>
        <span className={`card-state ${getStateClass(state)}`}>{state}</span>
      </div>
      <p className="card-description">{description}</p>
      <span className="card-datetime">
        {new Date(dateTime).toLocaleString()}
      </span>
    </div>
  );
}

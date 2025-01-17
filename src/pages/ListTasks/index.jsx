import { useState } from "react";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/form";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

export const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <button onClick={() => signOut(auth)}>DESLOGAR</button>
      <Form onSave={addTask} />
      <div className="task-cards">
        {tasks.map((task, index) => (
          <Card
            key={index}
            name={task.name}
            description={task.description}
            state={task.state}
            dateTime={task.dateTime}
            id={task.id}
          />
        ))}
      </div>
    </div>
  );
};

import { useEffect, useState, useContext } from "react";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/form";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { AuthContext } from "../../contexts/authContext";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { EditTaskModal } from "../../components/EditTaskModal/EditTaskModal";

export const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o modal
  const [taskToEdit, setTaskToEdit] = useState(null); // Task a ser editada

  const fetchTasks = async () => {
    try {
      const tasksRef = collection(db, "tasks");
      const q = query(tasksRef, where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      const fetchedTasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Erro ao buscar as tasks:", error.message);
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task); // Define a task a ser editada
    setIsModalOpen(true); // Abre o modal
  };

  const handleSaveEdit = async (updatedTask) => {
    try {
      const taskRef = doc(db, "tasks", updatedTask.id);
      await updateDoc(taskRef, {
        name: updatedTask.name,
        description: updatedTask.description,
        state: updatedTask.state,
      });

      // Atualiza a lista de tasks localmente
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
      setIsModalOpen(false); // Fecha o modal
    } catch (error) {
      console.error("Erro ao atualizar a task:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);

  return (
    <div className="container">
      <button onClick={() => signOut(auth)}>DESLOGAR</button>
      <Form />
      <div className="task-cards">
        {tasks.map((task) => (
          <Card
            key={task.id}
            name={task.name}
            description={task.description}
            state={task.state}
            dateTime={task.dateTime}
            id={task.id}
            onEdit={() => handleEdit(task)}
          />
        ))}
      </div>

      <EditTaskModal
        isOpen={isModalOpen}
        task={taskToEdit}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEdit}
        onChangeTask={setTaskToEdit}
      />
    </div>
  );
};

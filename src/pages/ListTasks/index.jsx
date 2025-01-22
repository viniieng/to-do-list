import { useEffect, useState, useContext } from "react";
import Card from "../../components/Card/index.jsx";
import Form from "../../components/Form/index.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { AuthContext } from "../../contexts/authContext";
import {
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { EditTaskModal } from "../../components/EditTaskModal/index.jsx";
import "./ListTasks.css";
import { ConfirmDeleteModal } from "../../components/DeleteTaskModal/index.jsx";
import "boxicons";

export const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [showDoneTasks, setShowDoneTasks] = useState(false);

  const fetchTasks = () => {
    try {
      const tasksRef = collection(db, "tasks");
      const q = query(tasksRef, where("userId", "==", user.uid));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedTasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const done = fetchedTasks.filter((task) => task.state === "DONE");
        const pending = fetchedTasks.filter((task) => task.state !== "DONE");

        setTasks(pending);
        setDoneTasks(done);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Erro ao buscar as tasks:", error.message);
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleSaveEdit = async (updatedTask) => {
    try {
      const taskRef = doc(db, "tasks", updatedTask.id);
      await updateDoc(taskRef, {
        name: updatedTask.name,
        description: updatedTask.description,
        state: updatedTask.state,
      });

      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar a task:", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const taskRef = doc(db, "tasks", taskToDelete.id);
      await deleteDoc(taskRef);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Erro ao excluir a tarefa:", error.message);
    }
  };

  const openDeleteModal = (task) => {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  const toggleDoneTasks = () => {
    setShowDoneTasks((prevState) => !prevState);
  };

  useEffect(() => {
    const unsubscribe = fetchTasks();

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="list-task-container">
      <div className="list-task-header">
        <div className="list-task-button-header">
          <button
            className="list-task-toggle-done-btn"
            onClick={toggleDoneTasks}
          >
            {showDoneTasks ? "Tarefas Pendentes" : "Tarefas Concluídas"}
          </button>
          <button
            className="list-task-logout-btn"
            onClick={() => signOut(auth)}
          >
            <box-icon name="log-in-circle" color="white"></box-icon>
          </button>
        </div>
        <div className="list-task-form">
          <Form />
        </div>
      </div>

      <div className="list-task-cards">
        {!showDoneTasks && (
          <>
            {tasks.length === 0 ? (
              <div className="list-task-noTask">
                <box-icon
                  name="task"
                  className="task-icon"
                  color="gray"
                  size="lg"
                ></box-icon>
                <p className="list-task-message">Não há tarefas pendentes :D</p>
              </div>
            ) : (
              tasks.map((task) => (
                <Card
                  key={task.id}
                  className="list-task-card"
                  task={task}
                  onEdit={() => handleEdit(task)}
                  onDelete={() => openDeleteModal(task)}
                />
              ))
            )}
          </>
        )}

        {showDoneTasks && (
          <>
            {doneTasks.length === 0 ? (
              <div className="list-task-noTask">
                <box-icon name="task-x" color="gray" size="lg"></box-icon>
                <p className="list-task-message">
                  Nenhuma tarefa concluída ainda :(
                </p>
              </div>
            ) : (
              doneTasks.map((task) => (
                <Card
                  key={task.id}
                  className="list-task-card done"
                  task={task}
                  onEdit={() => handleEdit(task)}
                  onDelete={() => openDeleteModal(task)}
                />
              ))
            )}
          </>
        )}
      </div>

      <EditTaskModal
        isOpen={isModalOpen}
        task={taskToEdit}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEdit}
        onChangeTask={setTaskToEdit}
      />

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        task={taskToDelete}
      />
    </div>
  );
};

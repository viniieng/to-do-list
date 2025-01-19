import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";

export const saveTask = async (task) => {
  try {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      throw new Error("Usuário não autenticado");
    }

    const newTask = {
      ...task,
      userId,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "tasks"), newTask);
    return docRef.id;
  } catch (error) {
    throw new Error(`Erro ao salvar task: ${error.message}`);
  }
};

export const fetchTasksByUserId = async (userId) => {
  try {
    const tasksRef = collection(db, "tasks");
    const q = query(tasksRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return tasks;
  } catch (error) {
    throw new Error(
      `Erro ao buscar tasks para o usuário ${userId}: ${error.message}`
    );
  }
};

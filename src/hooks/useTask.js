import { useState } from "react";
import { createTask, getTasks } from "../services/taskService";

const useTask = () => {
  const [tasks, setTasks] = useState([]);

  const handleCreate = async (form) => {
    try {
      const data = await createTask(form);
      setTasks([...tasks], data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    tasks,
    handleCreate,
    handleGetTasks,
  };
};

export default useTask;

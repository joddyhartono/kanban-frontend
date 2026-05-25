import { useState } from "react";
import {
  createTask,
  getTasks,
  moveTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

const useTask = () => {
  const [tasks, setTasks] = useState([]);

  const handleCreate = async (form) => {
    try {
      const data = await createTask(form);
      setTasks([...tasks, data]);
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

  const handleMoveTask = async (task) => {
    try {
      const data = await moveTask(task);
      if (!data) {
        return;
      }

      setTasks((tasks) => {
        return tasks.map((task) => {
          return task.id === data.id ? data : task;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (task) => {};

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((tasks) => {
        return tasks.filter((task) => {
          return task.id !== id;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    tasks,
    handleCreate,
    handleGetTasks,
    handleMoveTask,
    handleUpdate,
    handleDelete,
  };
};

export default useTask;

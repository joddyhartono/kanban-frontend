import instance from "./axiosInstance";
import { tasks } from "./apiRoutes";

const getTasks = async () => {
  try {
    const response = await instance.get(tasks.getAll);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createTask = async (form) => {
  try {
    const response = await instance.post(tasks.create, form);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const moveTask = async (task) => {
  try {
    const response = await instance.patch(tasks.move(task.id), task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const updateTask = async (task) => {
  try {
    const response = await instance.patch(tasks.update(task.id), task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteTask = async (id) => {
  try {
    await instance.delete(tasks.delete(id));
  } catch (error) {
    console.error(error);
  }
};

const getTask = async (id) => {
  try {
    const response = await instance.get(tasks.getById(id));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getTasks, createTask, moveTask, updateTask, deleteTask, getTask };

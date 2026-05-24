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

export { getTasks, createTask };

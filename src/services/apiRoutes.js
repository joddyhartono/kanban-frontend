const tasks = {
  create: "/tasks",
  getAll: "/tasks",
  getById: "",
  update: "",
  delete: (id) => {
    return `tasks/${id}`;
  },
  move: (id) => {
    return `tasks/${id}/status`;
  },
};

export { tasks };

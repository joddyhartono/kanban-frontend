const tasks = {
  create: "/tasks",
  getAll: "/tasks",
  getById: "",
  update: "",
  delete: "",
  move: (id) => {
    return `tasks/${id}/status`;
  },
};

export { tasks };

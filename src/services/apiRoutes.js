const tasks = {
  create: "/tasks",
  getAll: "/tasks",
  getById: (id) => {
    return `/tasks/${id}`;
  },
  update: (id) => {
    return `/tasks/${id}`;
  },
  delete: (id) => {
    return `tasks/${id}`;
  },
  move: (id) => {
    return `tasks/${id}/status`;
  },
};

export { tasks };

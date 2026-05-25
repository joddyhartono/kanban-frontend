import { useEffect, useState } from "react";
import Column from "../components/Column";
import useTask from "../hooks/useTask";

const Board = () => {
  const {
    tasks,
    handleCreate,
    handleGetTasks,
    handleMoveTask,
    handleUpdate,
    handleDelete,
  } = useTask();
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };
  const handleDragEnd = () => {
    setDraggedTask(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (status) => {
    if (!draggedTask) {
      return;
    }

    handleMoveTask({
      id: draggedTask.id,
      status: status,
    });
    setDraggedTask(null);
  };

  const toDo = tasks
    .filter((task) => task.status === "To do")
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const inProgress = tasks
    .filter((task) => task.status === "In progress")
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const done = tasks
    .filter((task) => task.status === "Done")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center py-6">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
      </div>

      <div className="flex justify-center gap-4 p-6">
        <Column
          color="bg-red-500"
          text="To do"
          canAdd={true}
          handleCreate={handleCreate}
          tasks={toDo}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={() => {
            handleDrop("To do");
          }}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
        <Column
          color="bg-yellow-500"
          text="In progress"
          canAdd={false}
          tasks={inProgress}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={() => {
            handleDrop("In progress");
          }}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
        <Column
          color="bg-green-500"
          text="Done"
          canAdd={false}
          tasks={done}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={() => {
            handleDrop("Done");
          }}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Board;

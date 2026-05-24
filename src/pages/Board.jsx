import { useEffect } from "react";
import Column from "../components/Column";
import useTask from "../hooks/useTask";

const Board = () => {
  const { tasks, handleCreate, handleGetTasks } = useTask();

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
          tasks={tasks}
        />
        <Column
          color="bg-yellow-500"
          text="In progress"
          canAdd={false}
          tasks={tasks}
        />
        <Column color="bg-green-500" text="Done" canAdd={false} tasks={tasks} />
      </div>
    </div>
  );
};

export default Board;

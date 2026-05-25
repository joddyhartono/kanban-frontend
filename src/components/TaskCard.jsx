import { RefreshCw, Trash } from "lucide-react";

const TaskCard = ({
  task,
  onDragStart,
  onDragEnd,
  handleUpdate,
  handleDelete,
}) => {
  return (
    <div
      className="w-full bg-slate-700 rounded-lg p-3 flex flex-col gap-1"
      draggable={true}
      onDragStart={() => {
        onDragStart(task);
      }}
      onDragEnd={() => {
        onDragEnd(task);
      }}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{task.title}</h3>
        <div className="flex gap-2 items-center">
          <RefreshCw
            className="bg-yellow-500 p-1 rounded-lg cursor-pointer hover:bg-yellow-800"
            onClick={handleUpdate}
          />
          <Trash
            className="bg-red-500 p-1 rounded-lg cursor-pointer hover:bg-red-800"
            onClick={() => {
              handleDelete(task.id);
            }}
          />
        </div>
      </div>
      <span className="text-slate-400">
        {new Date(task.dueDate).toLocaleDateString("en-GB")}
      </span>
      <p className="text-slate-400">{task.description}</p>
    </div>
  );
};

export default TaskCard;

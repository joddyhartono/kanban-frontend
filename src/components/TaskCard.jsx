const TaskCard = ({ task, onDragStart, onDragEnd }) => {
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
      <h3 className="font-medium">{task.title}</h3>
      <span className="text-slate-400">
        {new Date(task.dueDate).toLocaleDateString("en-GB")}
      </span>
      <p className="text-slate-400">{task.description}</p>
    </div>
  );
};

export default TaskCard;

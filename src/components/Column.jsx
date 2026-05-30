import { useState } from "react";
import { Button, Label, Input } from "./ui";
import TaskCard from "./TaskCard";

const Column = ({
  color,
  text,
  canAdd,
  handleCreate,
  tasks,
  onDragStart,
  onDragEnd,
  handleUpdate,
  handleDelete,
  ...props
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: null,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const data = await handleCreate(form);

      if (data) {
        setForm({ title: "", description: "", dueDate: null });
        setIsFormOpen(!isFormOpen);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-72 flex flex-col gap-2">
      <div
        className={`w-full rounded-lg p-3 text-xl font-semibold text-center ${color}`}
      >
        {text}
      </div>
      <div
        className="bg-slate-800 w-full rounded-lg p-3 min-h-24 flex flex-col gap-2"
        {...props}
      >
        {tasks &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      {canAdd && (
        <>
          <Button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="hover:bg-slate-800 font-medium"
          >
            + Add card
          </Button>
          {isFormOpen && (
            <form onSubmit={handleSubmit} className="w-72 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Label className="w-1/2">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex gap-2 items-center">
                <Label className="w-1/2">Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                />
              </div>

              <div className="flex gap-2 items-center">
                <Label className="w-1/2">Due date</Label>
                <Input type="date" name="dueDate" onChange={handleChange} />
              </div>

              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-800"
              >
                Add new task
              </Button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Column;

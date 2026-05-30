import { RefreshCw, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import useTask from "../hooks/useTask";
import { Label, Input, Button } from "./ui";

const TaskCard = ({
  task,
  onDragStart,
  onDragEnd,
  handleUpdate,
  handleDelete,
}) => {
  const { handleGetTask } = useTask();
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
    event.preventDefault();

    try {
      const data = await handleUpdate(form);

      if (data) {
        setForm({ title: "", description: "", dueDate: null });
        setIsFormOpen(!isFormOpen);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isFormOpen) {
      return;
    }

    const fetchTask = async () => {
      const data = await handleGetTask(task.id);
      setForm(data);
    };
    fetchTask();
  }, [isFormOpen]);

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
        <div className="flex gap-2 items-center relative">
          <RefreshCw
            className="bg-yellow-500 p-1 rounded-lg cursor-pointer hover:bg-yellow-800"
            onClick={() => {
              setIsFormOpen(!isFormOpen);
            }}
          />
          {isFormOpen && (
            <form
              onSubmit={handleSubmit}
              className="absolute w-72 bg-slate-800 rounded-lg p-3 top-8 flex flex-col gap-2"
            >
              <div className="flex gap-2 items-center">
                <Label className="w-1/2">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  required
                  value={form.title}
                />
              </div>

              <div className="flex gap-2 items-center">
                <Label className="w-1/2">Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  value={form.description}
                />
              </div>

              <div className="flex gap-2 items-center">
                <Label className="w-1/2">Due date</Label>
                <Input
                  type="date"
                  name="dueDate"
                  onChange={handleChange}
                  value={form.dueDate}
                />
              </div>

              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-800"
              >
                Update task
              </Button>
            </form>
          )}

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

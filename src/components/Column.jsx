import { useState } from "react";
import { Button, Label, Input } from "./ui";

const Column = ({ color, text, canAdd, handleCreate }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const data = await handleCreate(form);
      console.log(data);

      if (data) {
        setForm({ title: "", description: "", dueDate: "" });
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
      <div className="bg-slate-800 w-full rounded-lg p-3 min-h-24"></div>
      {canAdd && (
        <>
          <Button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            + Add card
          </Button>
          {isFormOpen && (
            <form onSubmit={handleSubmit}>
              <div>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Due date</Label>
                <Input type="date" name="dueDate" onChange={handleChange} />
              </div>

              <Button type="submit" className="bg-orange-500">
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

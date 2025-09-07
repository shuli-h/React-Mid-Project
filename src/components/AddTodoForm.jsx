import { useState } from "react";

export const AddTodoForm = ({ userId, onAdd, onCancel }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAdd({
        userId,
        id: Math.random(),
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <div
      style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}
    >
      <h3>New Todo – User {userId}</h3>
      <label>
        Title:{" "}
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <button onClick={onCancel}>Cancel</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodoForm;

import React, { useState } from "react";

export const AddNewUser = ({ onAdd, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNewUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    onAdd(newUser);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Add New User</h3>
      <p>
        <strong>Name:</strong>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        <strong>Email:</strong>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </p>

      <button onClick={handleNewUser}>Add</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
export default AddNewUser;

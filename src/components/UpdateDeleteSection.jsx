import React, { useState } from "react";

export const UpdateDeleteSection = ({ user, onUpdateUser, onDeleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleSave = () => {
    onUpdateUser(user.id, editedData);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            value={editedData.name}
            onChange={(e) =>
              setEditedData({ ...editedData, name: e.target.value })
            }
          />
          <input
            value={editedData.email}
            onChange={(e) =>
              setEditedData({ ...editedData, email: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            style={{ margin: "10px 8px 0 0", border: "1px solid gray" }}
          >
            Update
          </button>
          <button
            onClick={() => onDeleteUser(user.id)}
            style={{ margin: "10px 8px 0 0", border: "1px solid gray" }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

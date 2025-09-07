import React, { useState } from "react";
import { OtherData } from "./OtherData";
import { UpdateDeleteSection } from "./UpdateDeleteSection";
import { SelectingUser } from "./SelectingUser";
import AddNewUser from "./AddNewUser";

export const UserList = ({
  users,
  todos,
  onUpdateUser,
  onDeleteUser,
  selectedUserId,
  onSelectUser,
  onAddUser,
}) => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const getUserBorderColor = (id) => {
    const userTodos = todos.filter((todo) => todo.id === id);
    const hasUncompleted = userTodos.some((todo) => !todo.completed);
    return hasUncompleted ? "2px solid red" : "2px solid green";
  };

  return (
    <div>
      {!showAddUserForm ? (
        <>
          <button onClick={() => setShowAddUserForm(true)}>Add User</button>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                border: getUserBorderColor(user.id),
                backgroundColor:
                  selectedUserId === user.id ? " orange" : " white",
                padding: "10px",
                margin: "10px",
              }}
            >
              <p
                onClick={() => onSelectUser(user.id)}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <OtherData address={user.address} />
              <UpdateDeleteSection
                user={user}
                onUpdateUser={onUpdateUser}
                onDeleteUser={onDeleteUser}
              />
            </div>
          ))}
        </>
      ) : (
        <AddNewUser
          onAdd={(newUser) => {
            onAddUser(newUser);
            setShowAddUserForm(false);
          }}
          onCancel={() => setShowAddUserForm(false)}
        />
      )}
    </div>
  );
};

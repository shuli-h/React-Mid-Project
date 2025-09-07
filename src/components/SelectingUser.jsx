import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { AddPostForm } from "./AddPostForm";

export const SelectingUser = ({
  userId,
  posts,
  todos,
  onMarkCompleted,
  onAddTodo,
  onAddPost,
}) => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showAddPostForm, setShowAddPostForm] = useState(false);

  const userPosts = posts.filter((post) => post.userId === userId);
  const userTodos = todos.filter((todo) => todo.userId === userId);

  return (
    <div>
      <h2>Posts – User {userId}</h2>
      {!showAddPostForm ? (
        <>
          <button onClick={() => setShowAddPostForm(true)}>Add</button>
          {userPosts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid purple",
                margin: "5px",
                padding: "5px",
              }}
            >
              <p>
                <strong>Title:</strong> {post.title}
              </p>
              <p>
                <strong>Body:</strong> {post.body}
              </p>
            </div>
          ))}
        </>
      ) : (
        <AddPostForm
          userId={userId}
          onAdd={(newPost) => {
            onAddPost(newPost);
            setShowAddPostForm(false);
          }}
          onCancel={() => setShowAddPostForm(false)}
        />
      )}

      <h2>Todos – User {userId}</h2>
      {!showAddTodoForm ? (
        <>
          <button onClick={() => setShowAddTodoForm(true)}>Add</button>
          {userTodos.map((todo) => (
            <div
              key={todo.id}
              style={{
                border: "1px solid purple",
                margin: "5px",
                padding: "5px",
              }}
            >
              <p>
                <strong>Title:</strong> {todo.title}
              </p>
              <p>
                <strong>Completed:</strong> {todo.completed.toString()}
              </p>
              {!todo.completed && (
                <button onClick={() => onMarkCompleted(todo.id)}>
                  Mark Completed
                </button>
              )}
            </div>
          ))}
        </>
      ) : (
        <AddTodoForm
          userId={userId}
          onAdd={(newTodo) => {
            onAddTodo(newTodo);
            setShowAddTodoForm(false);
          }}
          onCancel={() => setShowAddTodoForm(false)}
        />
      )}
    </div>
  );
};

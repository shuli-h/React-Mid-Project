import React, { useState } from "react";

export const AddPostForm = ({ userId, onAdd, onCancel }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      const newPost = {
        userId,
        id: Date.now(),
        title,
        body,
      };
      onAdd(newPost);
      setTitle("");
      setBody("");
    }
  };

  return (
    <div>
      <h3>New Post – User {userId}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </label>
        <br />
        <label>
          Body:
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post body"
          />
        </label>
        <br />
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

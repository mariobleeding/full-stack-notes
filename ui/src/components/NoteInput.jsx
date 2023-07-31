import React, { useState } from "react";
import { createNote } from "../api/notes.js";

export default function NoteInput() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createNote(title, content).then((res) => {
        setTitle("");
        setContent("");
      });
    }
  };

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        placeholder="My Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="dark:bg-transparent dark:text-white p-2 m-1 dark:border-neutral-50 border-neutral-950 border-b-2 outline-none text-black"
      />

      <label htmlFor="content">Content:</label>
      <input
        type="text"
        id="content"
        placeholder="Running for 1hr"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyPress}
        className="dark:bg-transparent dark:text-white p-2 m-1 dark:border-neutral-50 border-neutral-950 border-b-2 outline-none text-black"
      />
    </form>
  );
}

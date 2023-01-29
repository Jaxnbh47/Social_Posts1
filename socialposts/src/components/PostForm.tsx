import { useState } from "react";
import { Post } from "../Post";

export function PostForm({ onSubmit, onClose }: { onSubmit: (post: Post) => void; onClose: () => void }) {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      onSubmit({ title, thought });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>New Thought</h2>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Thought:
          <textarea value={thought} onChange={(e) => setThought(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    );
  }
  
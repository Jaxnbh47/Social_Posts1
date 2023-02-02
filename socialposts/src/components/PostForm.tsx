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
      <div className="ThoughtForm">
      <form onSubmit={handleSubmit}>
        <div className="closebutton">
        <button onClick={onClose}>
          X
        </button>
        </div>
        <h2>New Thought</h2>
        <div className="inputs-style">
        <label>
          Title:
          <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>
          Thought:
          <textarea onChange={(e) => setThought(e.target.value)}></textarea>
        </label>
        </div>
        <button type="submit">Add Post</button>
      </form>
      </div>
    );
  }
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
        <div className="closebutton">
        <button type="button" onClick={onClose}>
          X
        </button>
        </div>
        <h2>New Thought</h2>
        <label>
          Title:
          <input type="text" value={title} onChange={(x) => setTitle(x.target.value)} />
        </label>
        <label>
          Thought:
          <textarea value={thought} onChange={(x) => setThought(x.target.value)} />
        </label>
        <button type="submit">Add Post</button>
      </form>
    );
  }
  
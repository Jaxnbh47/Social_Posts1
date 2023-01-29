import { Post } from "../Post";

export function PostInList({ post, onDelete }: { post: Post; onDelete: () => void }) {
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.thought}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
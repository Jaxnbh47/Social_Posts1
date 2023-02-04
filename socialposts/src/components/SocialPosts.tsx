import { useState } from "react";
import { Post } from "../Post";
import { PostInList } from "../components/PostInList";
import { PostForm } from "../components/PostForm";

export function SocialPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setShowForm(false);
  };
  
  const handleDelete = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="mythoughts">My Thoughts</h1>
      <div>
      <div className="button-container">
      <button className="buttonstyle" onClick={(e) => setShowForm(true)}>
          New Thought
        </button>
      </div>
        
        {showForm && (
          <div className="formstyle">
            <PostForm
              onSubmit={handleSubmit}
              onClose={() => setShowForm(false)}
            />
          </div>
        )}
        {posts.map((post, index) => (
          <PostInList
            key={index}
            post={post}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

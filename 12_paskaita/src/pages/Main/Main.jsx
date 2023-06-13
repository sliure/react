// import "./Main.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {post.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;

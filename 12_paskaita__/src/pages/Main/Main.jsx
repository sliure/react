import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.scss";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get("https://dummyjson.com/posts")
        .then((response) => {
          setPosts(response.data.posts);
        })
        .catch((error) => {
          console.log("Error fetcing posts:", error);
        });
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <div className="web-posts">
        {posts.map((post) => (
          <div className="web-post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {post.tags.map((tag) => (
              <p className="tag" key={tag}>
                #{tag}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;

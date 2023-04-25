import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Comments from "../FormCompts/Comments";
import PostOnForm from "../FormCompts/PostOnForm";

const Forum = () => {
  const [posts, Setposts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        Setposts(data);
      });
  }, []);

  function handleAddPost(addPost) {
    const updatedPosts = [...posts, addPost];
    Setposts(updatedPosts);
  }

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Discussions</h1>
      <Comments posts={posts} />
      <PostOnForm handleAddPost={handleAddPost}/>
      <Button sx={{ background: "black" }}>Make A Comment</Button>

    </div>
  );
};

export default Forum;

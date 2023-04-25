import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Comments from "../FormCompts/Comments";
import PostOnForm from "../FormCompts/PostOnForm";

const Forum = () => {
  const [posts, Setposts] = useState([]);
  const [hide, SetHide] = useState(true);
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

  function handleShowForm() {
    SetHide(!hide);
  }

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Discussions</h1>
      <Comments posts={posts} />
      {hide ? <PostOnForm handleAddPost={handleAddPost} /> : null}
      <Button onClick={handleShowForm} sx={{ background: "black" }}>
        {!hide ? "Make A Comment" : "Collapse"}
      </Button>
    </div>
  );
};

export default Forum;

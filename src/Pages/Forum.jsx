import { Button } from "@mui/material";
import PostAForm from "../Components/PostAForm";
import { useEffect, useState } from "react";
import FormCard from "../Components/FormCard";

const Forum = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(post);

  return (
    <div>
      <h1>Discussion</h1>

      <h1>Discussions</h1>
      <FormCard posts={post} />
      <Button sx={{ background: "black" }}>Make A Comment</Button>
    </div>
  );
};

export default Forum;

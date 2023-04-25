/* eslint-disable react/prop-types */
import { useState } from "react";
import "/home/clifga/new-project/Phase-2-Project-anime/src/FormCompts/form.css";

const PostOnForm = ({ handleAddPost }) => {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [article, setArticle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTitle("");
    setUsername("");
    setArticle("");

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        title: title,
        username: username,
        article: article,
      }),
    })
      .then((res) => res.json())

      .then((newPost) => handleAddPost(newPost));
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          value={title}
        ></input>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          value={username}
        ></input>
        <textarea
          onChange={(e) => setArticle(e.target.value)}
          rows="10"
          cols="60"
          placeholder="Write your post"
          value={article}
        ></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
};
export default PostOnForm;

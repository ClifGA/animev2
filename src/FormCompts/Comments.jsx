/* eslint-disable react/prop-types */
import FormCard from "./FormCard";

const Comments = ({ posts }) => {
  const displayPosts = posts.map((post) => {
    return <FormCard key={post.title} posts={post} />;
  });

  return <div>{displayPosts}</div>;
};

export default Comments;

/* eslint-disable react/prop-types */

const FormCard = ({ posts }) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div>
          <div>
            <h3>{posts.title}</h3>
          </div>
          <p>username: {posts.username}</p>
        </div>

        <p>{posts.article}</p>
      </div>
    </div>
  );
};

export default FormCard;

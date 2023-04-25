/* eslint-disable react/prop-types */

const FormCard = ({ posts }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "columnStart",
        margin: "10px",
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

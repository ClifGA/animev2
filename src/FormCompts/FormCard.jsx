/* eslint-disable react/prop-types */

const FormCard = ({ posts }) => {
  return (
    <div
      className="form-card"
      style={{
        width: "100%",
        border: "2px solid black",
        margin: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px 5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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

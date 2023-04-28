/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";

const SearchAnime = () => {
  const [search, setSearch] = useState("");
  const [anime, setAnime] = useState([]);

  const handleAddFavorite = (anime) => {
    fetch("http://localhost:3000/favorite", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(anime),
    })
      .then((res) => res.json())
      .then((newAnime) => setAnime([...anime, newAnime]));
  };
  function handleSearch(e) {
    e.preventDefault();
    fetch(`https://api.jikan.moe/v4/anime?letter=${search}&order`)
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data);
      });
  }
  const renderList = anime.map((element) => {
    return (
      <li style={{ fontFamily: "sans-serif" }} key={element.title}>
        {element.title}{" "}
        <a href={element.url} target="_blank">
          📺
        </a>
        <button
          onClick={() => handleAddFavorite(element)}
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          ✅
        </button>{" "}
      </li>
    );
  });
  return (
    <div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "4px",
          width: "100%",
          height: "300px",
          overflow: "scroll",
        }}
      >
        {renderList}
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#f1f1f1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          type="text"
          placeholder="Search Anime"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchAnime;

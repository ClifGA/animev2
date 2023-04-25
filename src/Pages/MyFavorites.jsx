import { useEffect, useState } from "react";
import FavCard from "../FavCompents/FavCard";

const MyFavorites = () => {
  const [favAnime, SetFavAnime] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/favorite")
      .then((res) => res.json())
      .then((data) => SetFavAnime(data));
  }, []);

  const renderFavCards = favAnime.map((element) => {
    return <FavCard key={element.title} fav={element} />;
  });

  return (
    <div>
      {renderFavCards}
    </div>
  );
};

export default MyFavorites;

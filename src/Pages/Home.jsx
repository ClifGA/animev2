import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AnimeCards from "../Components/AnimeCards";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "/home/clifga/project-2/src/Components/CarouselCards.css";
import AnimeList from "../Components/AnimeList";

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setTopAnime(data.data.slice(0, 10)));
  }, []);

  const renderCarousel = topAnime.map((element) => {
    return <AnimeCards key={element.name} animes={element} />;
  });
  return (
    <div className="container">
      <div>
        <br></br>
        <br></br>
        <h1>Top 10 Animes</h1>
      </div>
      <div className="carousel-container">
        <AliceCarousel role="presentation">{renderCarousel}</AliceCarousel>
      </div>
       <AnimeList />
    </div>
  );
};

export default Home;

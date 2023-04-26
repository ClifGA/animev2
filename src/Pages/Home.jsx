/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AnimeCards from "../Components/AnimeCards";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "/home/clifga/project-2/src/Components/CarouselCards.css";
import AnimeQuote from "../Components/AnimeQuote";
import SearchAnime from "../Components/SearchAnime";

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setTopAnime(data.data.slice(0, 25)));
  }, []);

  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("https://animechan.vercel.app/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    960: {
      items: 5,
    },
  };

  const renderCarousel = topAnime.map((element) => {
    return <AnimeCards key={element.name} animes={element} />;
  });
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <AnimeQuote quotes={quotes} />
        </div>
        <div style={{ flex: 1 }}>
          <SearchAnime />
        </div>
      </div>
      <h1>Top 25 Animes</h1>
      <div className="carousel-container" style={{ flex: 1 }}>
        <AliceCarousel
          role="presentation"
          stagePadding={{ paddingLeft: 10, paddingRight: 10 }}
          responsive={responsive}
        >
          {renderCarousel}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Home;

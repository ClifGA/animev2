/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AnimeCards({ animes }) {
  const clickButton = () => {
    const favs = {
      title: animes.title,
      score: animes.score,
      episodes: animes.episodes,
      year: animes.year,
      type: animes.type,
      url: animes.url,
    };
    fetch("http://localhost:3000/favorite", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(favs),
    })
      .then((res) => res.json())

      .then((data) => data);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="anime-card"
      style={{ height: "450px", width: "300px" }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={animes.images.jpg.large_image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {animes.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            <li>Rating {animes.score} ⭐ </li>
            <li>Total Episodes {animes.episodes}</li>
            <li>Released Year {animes.year} </li>
            <li>{animes.type}</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={clickButton} size="small">
          Add to Favorite
        </Button>
        <Button href={animes.url} target="_blank" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

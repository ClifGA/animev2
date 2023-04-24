/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AnimeCards({ animes }) {
  console.log(animes);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={animes.images.jpg.large_image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
        <Button size="small">Add to Favorite</Button>
        <Button href={animes.url} target="_blank" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

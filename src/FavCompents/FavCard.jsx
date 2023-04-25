/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "/home/clifga/new-project/Phase-2-Project-anime/src/FavCompents/FavCards.css";

const FavCard = ({ fav, updateFavs }) => {
  const handleDelete = () => {
    fetch(`http://localhost:3000/favorite/${fav.id}`, {
      method: "DELETE",
      body: JSON.stringify(fav),
    })
      .then((res) => res.json())
      .then((data) => data);
    updateFavs(fav.id);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="Cards"
      style={{ height: "450px", width: "300px" }}
    >
      <CardMedia
        component="img"
        alt={fav.title}
        height="140"
        image={fav.images.jpg.image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {fav.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            <li>Rating {fav.score} ⭐ </li>
            <li>Total Episodes {fav.episodes}</li>
            <li>Released Year {fav.year} </li>
            <li>{fav.type}</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} size="small">
          Remove From Favorite
        </Button>
        <Button href={fav.url} target="_blank" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavCard;

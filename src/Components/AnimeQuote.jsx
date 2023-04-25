/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";

function AnimeQuote({ quotes }) {
  console.log(quotes);
  return (
    <div>
      <Typography gutterBottom variant="h4" component="div" color="red">
        {"Today's Quote"}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        From: {quotes.anime}
      </Typography>

      <Typography gutterBottom variant="p" component="div">
        {quotes.quote}
        <br></br>- {quotes.character}
      </Typography>
    </div>
  );
}

export default AnimeQuote;

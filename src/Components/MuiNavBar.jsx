import { AppBar, Toolbar, Tab } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "react-router-dom";

const MuiNavBar = () => {
  return (
    <div>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>
          <LocalMoviesIcon></LocalMoviesIcon>
          <Tab label="Home" value="home" component={Link} to={"/"}></Tab>
          <Tab
            label="My Favorites"
            value="myfavorite"
            component={Link}
            to={"/myfavorite"}
          ></Tab>
          <Tab label="Forum" value="forum" component={Link} to={"/forum"}></Tab>
          <Tab
            label="Contact Us"
            value="contactus"
            component={Link}
            to={"/contactus"}
          ></Tab>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MuiNavBar;

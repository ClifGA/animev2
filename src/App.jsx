import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import MuiNavBar from "./Components/MuiNavBar";
import Home from "./Pages/Home";
import MyFavorites from "./Pages/MyFavorites";
import Forum from "./Pages/Forum";
import ContactUs from "./Pages/ContactUs";

const App = () => {

    
  return (
    <BrowserRouter>
      <MuiNavBar></MuiNavBar>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myfavorite" element={<MyFavorites />} />
          <Route path="forum" element={<Forum />} />
          <Route path="contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

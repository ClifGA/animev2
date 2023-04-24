import "./App.css";
import { useEffect } from "react";
function App() {
  const url = "https://api.myanimelist.net/v2/anime/ranking";
  


  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return <></>;
}

export default App;

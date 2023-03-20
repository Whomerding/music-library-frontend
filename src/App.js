import React, { useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import TableDisplay from "./Components/TableDisplay/TableDisplay";
import axios from "axios";
function App() {
  const [songs, setSongs] = useState ()

  useEffect(() => {
    tableResponses();
  }, []);

  async function tableResponses() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <div>
      <NavigationBar />
      <TableDisplay parentSongs = {songs} />
    </div>
  );
}

export default App;

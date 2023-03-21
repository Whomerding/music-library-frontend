import React, { useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import TableDisplay from "./Components/TableDisplay/TableDisplay";
import AddMusic from"./Components/AddMusic/AddMusic";
import axios from "axios";


function App() {
  const [songs, setSongs] = useState ([{}])

useEffect(() => {
  getAllSongs();
}, []);


async function getAllSongs() {
  const response = await axios.get("http://127.0.0.1:8000/api/music/");
  console.log(response.data);
  setSongs(response.data);
}
async function createSong(newSong){
  let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
  if (response.status === 201) {
    await getAllSongs();
  }
}

return (
  <div>
    <NavigationBar/>
    <TableDisplay parentSongs = {songs} />
    <AddMusic/>
  </div>
);
}

export default App;
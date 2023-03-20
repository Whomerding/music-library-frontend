import React, { useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import TableDisplay from "./Components/TableDisplay/TableDisplay";
import axios from "axios";
import AddMusic from "./Components/AddMusic/AddMusic";
function App() {
  const [song, setSong] = useState ()

  function addNewSong(song){
    let tempSong = [song];
    setSong(tempSong);
    axios.post('http://127.0.0.1:8000/api/music/', tempSong)
        .then(response => this.setState({ tempSong: [ "title:": response.data.title ]}))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  }

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
      <TableDisplay parentSongs = {song} />
      <AddMusic addNewSongProperty = {addNewSong}/>
    </div>
  );
}

export default App;

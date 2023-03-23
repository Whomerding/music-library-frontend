import React, {useState, useEffect} from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import AddMusic from"./Components/AddMusic/AddMusic";
import TableDisplay from "./Components/TableDisplay/TableDisplay";
import SearchMusic from "./Components/SearchMusic/SearchMusic";
import axios from "axios";
import "./Components/app.css"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [toggle, setToggle] = useState(false);
  const [songs, setSongs] = useState([]) 
  
  useEffect(()=> {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log (songs)
}
  return (
    <div className="page">
    <NavigationBar/>
      <div class = "container">
        <div class = "row">
          <div class = "col-4">
            <AddMusic getAllSongs={getAllSongs}/>
          </div>
          <div class = "col-8">
            <SearchMusic setSearchTerm={setSearchTerm} setToggle={setToggle} toggle={toggle} searchTerm={searchTerm}/>
            <TableDisplay songs={songs} searchTerm={searchTerm} getAllSongs={getAllSongs}/>
          </div>  
      </div>
      <div class = "row">
      </div>
  </div>
  </div>
);
}

export default App;
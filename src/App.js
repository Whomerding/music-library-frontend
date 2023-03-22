import React, {useState} from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import AddMusic from"./Components/AddMusic/AddMusic";
import SongPage from "./Components/Pages/SongPage";
import SearchMusic from "./Components/SearchMusic/SearchMusic";



function App({}) {
  const [searchTerm, setSearchTerm] = useState("")
  const [toggle, setToggle] = useState(false);

return (
  <div>
    <NavigationBar/>
    <SearchMusic setSearchTerm={setSearchTerm} setToggle={setToggle} toggle={toggle}/>
    <SongPage searchTerm ={searchTerm} toggle={toggle}/>
    <AddMusic/>
  </div>
);
}

export default App;
import React, { useState } from "react";
import axios from "axios";
import "./AddMusic.css"

const AddMusic = ({ getAllSongs }) => {
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    album: "",
    release_date: "",
    genre: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    //  const formattedDate = moment(songData.date_field).format('YYYY-MM-DD');
    //   await axios.post('http://127.0.0.1:8000/api/music/', {release_date: formattedDate })
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
    try {
      await axios.post("http://127.0.0.1:8000/api/music/", songData);
      getAllSongs();
      console.log("Song added!");
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (event) => {
    setSongData({ ...songData, [event.target.name]: event.target.value });
  };
  return (
    <form className = "container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={songData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Artist</label>
        <input
          type="text"
          name="artist"
          value={songData.artist}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Album</label>
        <input
          type="text"
          name="album"
          value={songData.album}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Release Date</label>
        <input
          type="date"
          name="release_date"
          value={songData.date_field}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={songData.genre}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <button type="submit">Add Song</button>
      </div>
    </form>
  );
};
export default AddMusic;

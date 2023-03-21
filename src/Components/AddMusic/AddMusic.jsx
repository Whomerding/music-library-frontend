import React, { useState } from 'react';
import axios from 'axios';

const AddMusic = () => {
    const[songData, setSongData] = useState({
   title: '',
   artist: '',
   album: '',
   release_date: '',
   genre: ''
});

   const handleSubmit = async(event) => {
       event.preventDefault();
       try {
        await axios.post('http://127.0.0.1:8000/api/music/', songData);
        console.log('Song added!');
      } catch (error) {
        console.log(error);
      }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSongData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
   return (
       <form onSubmit={handleSubmit}>
           <label>Title</label>
           <input type='text' name = 'title' value={songData.title} onChange={handleInputChange}/>
           <label>Artist</label>
           <input type='text' name = 'artist' value={songData.artist} onChange={handleInputChange}/>
           <label>Album</label>
           <input type='text' name = 'album' value={songData.album} onChange={handleInputChange}/>
           <label>Release Date</label>
           <input type='date' name = 'date' value={songData.release_date} onChange={handleInputChange}/>
           <label>Genre</label>
           <input type='text' vname = 'genre' value={songData.genre} onChange={handleInputChange}/>
           <button type='submit'>Add Song</button>
       </form>
    );
   } 
export default AddMusic;
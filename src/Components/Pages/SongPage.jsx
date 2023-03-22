import axios from "axios";
import React, { useState, useEffect } from 'react';
import TableDisplay from "../TableDisplay/TableDisplay";


export default function SongPage({searchTerm, toggle}){
    const [songs, setSongs] = useState([])
    
    const fetchSongs = async() => {
        let response = await axios.get('http://127.0.0.1:8000/api/music/?=${searchTerm}');
        console.log(response.data);
        setSongs(response.data)
    }
    
    useEffect(()=> {
        fetchSongs(searchTerm);
    }, [toggle]);

    return (
    <div>
        <TableDisplay songs={songs}/>
    </div>
    );
}

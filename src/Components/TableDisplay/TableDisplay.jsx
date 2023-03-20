import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

function TableDisplay() {
    
    useEffect(()=> {
        TableResponses ();
    }, []);
    
    const [songs, setSongs] = useState([])


    async function TableResponses(){
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data);
        setSongs(response.data)
    }
    return ( 
        <div>
            <button onClick={() => TableDisplay()}>Get All Songs</button>
        </div>
     );
}

export default TableDisplay

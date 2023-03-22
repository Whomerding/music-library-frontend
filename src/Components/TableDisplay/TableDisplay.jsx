import React from 'react';
import axios from 'axios';

const TableDisplay = ({songs}) => {
    
    const deleteSong = (id) => {
        axios.delete('http://127.0.0.1:8000/api/music/${id}', {
    })
   
    function handleClick(event){
    event.preventDefault()
    deleteSong(id)
}
    }
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
               
            {songs.map((el)=>(       
                <tr>
                    <td>{el.title}</td>
                    <td>{el.album}</td>
                    <td>{el.artist}</td>
                    <td>{el.genre}</td>
                    <td>{el.release_date}</td>
                    <td><button onClick={handleClick} id={el.id}>Delete</button></td>
                </tr> 
                ))};
            </tbody>
        </table>
        );
}
export default TableDisplay;

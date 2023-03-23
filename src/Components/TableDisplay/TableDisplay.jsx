import React from 'react';
import axios from 'axios';
import SearchMusic from '../SearchMusic/SearchMusic';

const TableDisplay = ({songs, searchTerm, getAllSongs}) => {
    const deleteSong = async(id) => {
        await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`).then(()=> getAllSongs())
    }
    return ( 
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
               
            {songs
            // .filter((object)=>{
            //     for (const key in object) {
            //         if (key !== 'id') return typeof object[key] === 'string' && object[key].toLowerCase().includes(searchTerm.toLowerCase())
            //         //Pascal is awesome!!
            //     }
            // })
            .filter(el => (
                el.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                el.album.toLowerCase().includes(searchTerm.toLowerCase())|| 
                el.artist.toLowerCase().includes(searchTerm.toLowerCase()) || 
                el.genre.toLowerCase().includes(searchTerm.toLowerCase())||
                el.release_date.toLowerCase().includes(searchTerm.toLowerCase()))
                )
            .map((el)=>(       
                <tr key={el.id}>
                    <td>{el.title}</td>
                    <td>{el.album}</td>
                    <td>{el.artist}</td>
                    <td>{el.genre}</td>
                    <td>{el.release_date}</td>   
                    <td><button onClick= {()=> deleteSong(el.id)}>Delete</button></td>  
                    {console.log(el)}  
                </tr> 
                ))}
            </tbody>
        </table>
        );
}
export default TableDisplay;




// return(
//     <ul>
//         {/* {arrayNameHere.map(item => <ChildComponent itemName={item}/>)} */}
//         {songs.map(song => <SongPresenter song={song}/>)}
//     </ul>
// )

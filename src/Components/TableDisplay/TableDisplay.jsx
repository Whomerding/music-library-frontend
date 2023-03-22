import React from 'react';


const TableDisplay = ({songs}) => {
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
                </tr> 
                ))};
            </tbody>
        </table>
        );
}
export default TableDisplay;

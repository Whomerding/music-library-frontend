import React, { useState, useEffect} from 'react';

const TableDisplay = (props) => {
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
                {props.parentSongs.map((song) => {
                    return (
                        <tr>
                            <td>{song.title} key=</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        );
    }
 
export default TableDisplay;

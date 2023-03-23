import React from 'react';

export default function SearchMusic({setSearchTerm, searchTerm, setToggle, toggle}){
    // function handleSubmit(event){
    //     event.preventDefault()
    //     setToggle(!toggle)
    // }
    
    return ( 
        <div>
            {/* <form onSubmit={handleSubmit}> */}
            <form> 
            <input placeholder = "Search Songs" type="text" value = {searchTerm} onChange= {event=> setSearchTerm(event.target.value)}/>
             {/* <button type= "submit">Song Search</button> */}
            </form>
        </div>
     );
}


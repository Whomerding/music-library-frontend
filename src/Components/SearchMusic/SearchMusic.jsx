import React from 'react';

export default function SearchMusic({setSearchTerm, setToggle, toggle}){
    function handleSubmit(event){
        event.preventDefault()
        setToggle(!toggle)
    }
    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
             <input
             onChange={(event)=>setSearchTerm(event.target.value)}/>
             <button type= "submit" >Song Search</button>
            </form>
        </div>
     );
}


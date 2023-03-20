import React, { useState, useEffect } from 'react';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import TableDisplay from './Components/TableDisplay/TableDisplay';
function App() {
  return (
    <div>
      <NavigationBar/>
      <TableDisplay/>
    </div>
    
  );
}

export default App;

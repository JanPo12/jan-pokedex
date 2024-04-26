import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes'
import React, { useEffect, useState } from "react";

function App() {
  const [shiny, setShiny] = useState(false)
  const routing = useRoutes(routes(shiny, setShiny))

  return (
    <div className='App'>
      {routing}
    </div>
  );
}

export default App;

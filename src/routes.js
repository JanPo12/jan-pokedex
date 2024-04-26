import React from "react";
import Layout from "./Layout";
import Home from "./components/home";
import Pagina from "./components/pagina"

const routes = (shiny, setShiny) => [

    {
        path: "/",
        element: <Layout shiny={shiny} setShiny={setShiny}/>,
        children: [ 
            { path: "/", element: <Home shiny={shiny} /> },
            { path: "/pokemon/:id", element: <Pagina shiny={shiny} /> }
        ],
    },
];

export default routes;
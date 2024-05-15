import React from "react";
import Layout from "./Layout";
import Home from "./components/home";
import Pagina from "./components/pagina"

const routes = (shiny, setShiny,mostrar_busqueda,setMostrar_busqueda) => [

    {
        path: "/",
        element: <Layout shiny={shiny} setShiny={setShiny} mostrar_busqueda={mostrar_busqueda} setMostrar_busqueda={setMostrar_busqueda}/>,
        children: [ 
            { path: "/", element: <Home shiny={shiny} mostrar_busqueda={mostrar_busqueda}/> },
            { path: "/pokemon/:id", element: <Pagina shiny={shiny} /> }
        ],
    },
];

export default routes;
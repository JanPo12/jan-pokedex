import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/AppBar";
import Pagina from "./components/pagina";

const Layout = (props) => {

    return (
        <div>
            <Outlet />
            <Menu shiny={props.shiny} setShiny={props.setShiny} mostrar_busqueda={props.mostrar_busqueda} setMostrar_busqueda={props.setMostrar_busqueda} />
        </div>
    );
};

export default Layout; 
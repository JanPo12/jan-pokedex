import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/AppBar";
import Pagina from "./components/pagina";

const Layout = (props) => {

    return (
        <div>
            <Outlet />
            <Menu shiny={props.shiny} setShiny={props.setShiny}/>
        </div>
    );
};

export default Layout; 
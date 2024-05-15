import { useNavigate } from 'react-router-dom';
import '../css/AppBar.css';
import { useState } from 'react';

function AppBar(props) {


  const navigate = useNavigate()

  function activar_busqueda(){
    if (props.mostrar_busqueda == true)
      props.setMostrar_busqueda(false)
    else
      props.setMostrar_busqueda(true)

    console.log(props.mostrar_busqueda)
  }

  function enviar_nom(){
    var value = document.getElementById('buscador').value;
    props.setMostrar_busqueda(value)
  }
  

  return(
    
    <div className="AppBar">
      {props.mostrar_busqueda ? <div className='buscar'><input type='text' placeholder='Buscar:' id='buscador' style={{backgroundColor:"rgb(208, 249, 255)"}} onChange={() => {enviar_nom()}} ></input> </div> : null}
      <div className = "anterior_gen" onClick={() => {navigate("/")}}>
        <button className = "boto_anterior_gen">🏠︎</button>
      </div>
      <div className = "pokeball_menu">
        <button onClick={() => {props.setShiny(!props.shiny)}} className = "boto_pokeball_menu"></button>
      </div>
      <div className = "seguent_gen">
        <button className = "boto_seguent_gen" onClick={() => {activar_busqueda()}}>🔍</button>
      </div>
    </div>
  );
}

export default AppBar;
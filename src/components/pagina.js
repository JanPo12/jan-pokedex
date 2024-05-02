import '../css/pagina.css';
import React, { useEffect, useState } from "react";
import { getElements } from "../API";
import { useNavigate, useParams } from 'react-router-dom';

function Pagina(props) {

  const [pokemon, setPokemon] = useState(null)
  const [desc, setDesc] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const getPokemon = async () => {
        const { result } = await getElements('https://pokeapi.co/api/v2/pokemon/' + id);
        
        setPokemon(result);
    };

    const getDesc = async () => {
      const { result } = await getElements('https://pokeapi.co/api/v2/pokemon-species/' + id);
      
      setDesc(result);
  };
    getDesc();
    getPokemon();
  }, []);
  const tipoColorDict = {
    "normal": "rgb(168, 167, 122)",
    "fire": "rgb(238, 129, 48)",
    "water": "rgb(99, 144, 240)",
    "electric": "rgb(247, 208, 44)",
    "grass": "rgb(122, 199, 76)",
    "ice": "rgb(150, 217, 214)",
    "fighting": "rgb(194, 46, 40)",
    "poison": "rgb(163, 62, 161)",
    "ground": "rgb(226, 191, 101)",
    "flying": "rgb(169, 143, 243)",
    "psychic": "rgb(249, 85, 135)",
    "bug": "rgb(166, 185, 26)",
    "rock": "rgb(182, 161, 54)",
    "ghost": "rgb(115, 87, 151)",
    "dragon": "rgb(111, 53, 252)",
    "dark": "rgb(112, 87, 70)",
    "steel": "rgb(183, 183, 206)", 
    "fairy": "rgb(214, 133, 173)"};
  return(
    <div>
      <div className="gen1">
        <b>{pokemon?.name} Nº{pokemon?.id}</b>
      </div>
      <div className="llista2">
        <img className='imatgePoke' style={{borderColor: tipoColorDict[pokemon?.types[0].type.name]}} src={props.shiny ? pokemon?.sprites?.front_shiny : pokemon?.sprites?.front_default}></img>
        <p className='tipus1' style={{backgroundColor: tipoColorDict[pokemon?.types[0].type.name]}}>{pokemon?.types[0].type.name}</p>
        <p className='tipus2' style={{backgroundColor: tipoColorDict[pokemon?.types[1]?.type?.name]}}>{pokemon?.types[1]?.type?.name}</p>
        <div className='mesura' style={{borderColor: tipoColorDict[pokemon?.types[0].type.name]}}>
          <p>Altura: {pokemon?.height}m</p>
          <p>Peso: {pokemon?.weight}kg</p>
        </div>
        <div className='descripcio' style={{borderColor: tipoColorDict[pokemon?.types[0].type.name]}}>
          <p>{desc?.flavor_text_entries[26].flavor_text}</p>
        </div>
        <div className='stats' style={{borderColor: tipoColorDict[pokemon?.types[0].type.name]}}>
          <p className='p_s'>Vida: <div className='div_s' style={{width:pokemon?.stats[0].base_stat * 1.5}}>{pokemon?.stats[0].base_stat}</div></p>
          <p className='p_s'>Ataque: <div className='div_s' style={{width:pokemon?.stats[1].base_stat * 1.5}}>{pokemon?.stats[1].base_stat}</div></p>
          <p className='p_s'>Defensa: <div className='div_s' style={{width:pokemon?.stats[2].base_stat * 1.5}}>{pokemon?.stats[2].base_stat}</div></p>
          <p className='p_s'>Ataque-Especial: <div className='div_s' style={{width:pokemon?.stats[3].base_stat * 1.5}}>{pokemon?.stats[3].base_stat}</div></p>
          <p className='p_s'>Defensa-Especial: <div className='div_s' style={{width:pokemon?.stats[4].base_stat * 1.5}}>{pokemon?.stats[4].base_stat}</div></p>
          <p className='p_s'>Velocidad: <div className='div_s' style={{width:pokemon?.stats[5].base_stat * 1.5}}>{pokemon?.stats[5].base_stat}</div></p>
        </div>
      </div>
    </div>
    
  );
}

export default Pagina;
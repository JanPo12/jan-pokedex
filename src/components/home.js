import '../css/home.css';
import React, { useEffect, useState } from "react";
import { getElements } from "../API";
import { useNavigate } from 'react-router-dom';

function Home(props) {

  const [pokemon, setPokemon] = useState(null)

  const Navigate = useNavigate()

  useEffect(() => {
    const getPokemon = async () => {
        const { result } = await getElements('https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0');
        const pokemons = await Promise.all(result.results.map(async (poke) => {
            const { result: pokemonData } = await getElements(poke.url);
            return pokemonData;
        }));
        setPokemon(pokemons);
    };

    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemon?.length === 20) {
        const sortedPokemon = [...pokemon].sort((a, b) => a.id - b.id);
        console.log(sortedPokemon);
        setPokemon(sortedPokemon);
    }
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
      <div className="gen">
        <b>Home</b>
      </div>
      <div className="llista">
      {pokemon?.map((poke) => {
          return (
            <div className = "pokemon" onClick={() => {Navigate("/pokemon/" + poke.id)}}>
              <img className='imatge' style={{borderColor: tipoColorDict[poke?.types[0].type.name]}} src={props.shiny ? poke?.sprites?.front_shiny : poke?.sprites?.front_default}></img>
              <div className='text'>
                <div className='text_esq'>
                  <p className='id'>Nº {poke?.id}</p>
                  <p className='nom'>{poke?.name}</p>
                </div>
                <div className="text_dret">
                  <p className='tipus' style={{backgroundColor: tipoColorDict[poke?.types[0].type.name]}}>{poke?.types[0].type.name}</p>
                  <p className='tipus' style={{backgroundColor: tipoColorDict[poke?.types[1]?.type?.name]}}>{poke?.types[1]?.type?.name}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
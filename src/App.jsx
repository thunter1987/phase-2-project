import React from "react";
import "./App.css";
import Home from "./Home";
import PokémonList from "./PokémonList";
import { useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = async (event) => {
    event.preventDefault();
    await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.stats[3].base_stat,
        });
        return <p>{ pokemon }</p>
      });
  };

  function handleSearchChange(event){
    setPokemonName(event.target.value)
  }

  return (
    <div className='App'>
      <Home />
        <PokémonList pokemon={ pokemon }
       className='SearchBar'>
        <h1>Pokemon Info</h1>
        <form onSubmit={searchPokemon}><input
          className='pokemon-search-input'
          type='text'
          value={pokemonName}
          onChange={handleSearchChange}
        />
        <button type="Submit" value={pokemonName}>Search Pokemon</button>
          </form>
          </PokémonList>
    </div>
  );
}

export default App;
